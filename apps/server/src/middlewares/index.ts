import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/dotenv.config.js";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};

const mongoErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err?.errors).map((e: any) => e?.message);
    res.status(400).json({ message: messages.join(', ') });
    return;
  }

  // error unique
  if (err.code === 11000) {
    const field = Object.keys(err?.keyPattern)[0];
    const value = err?.keyValue[field];
    res.status(409).json({ message: `${field} "${value}" already in use.` });
    return;
  }
};

const securityMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
};

const notFoundMiddleware = (req: Request, res: Response) => {
  res.status(404).json({error: "Not Found"});
};

const checkTokens = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.signedCookies.accessToken;

  if (!token) {
    res.sendStatus(401);
    return;
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    (req as any).userId = decoded?.userId;
    next();
  } catch (err) {
    res.sendStatus(401);
    return;
  }
};

export {
  globalErrorHandler,
  securityMiddleware,
  notFoundMiddleware,
  checkTokens,
  mongoErrorHandler
};