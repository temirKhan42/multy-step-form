import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import _ from 'lodash';
import { ACCESS_EXPIRES_MSEC, REFRESH_EXPIRES_MSEC, REFRESH_SECRET } from "../config/dotenv.config.js";
import getCookieConfig from "../config/cookie.config.js";
import { AuthService } from "../services/auth.service.js";
import { generateAccessToken, generateRefreshToken, refreshTokens } from "../utils/generateToken.js";
import { IRegister, IRegisterBody } from "../types/auth.type.js";

const getUserToClient = (user: IRegister) => {
  const safeData: IRegisterBody = {
    "_id": user._id,
    "name": user.name,
    "email": user.email,
    "phone": user.phone,
    // "ip": user.ip,
    // "userAgent": user.userAgent
  };

  return safeData;
};

const accessTokenName = 'accessToken';
const refreshTokenName = 'refreshToken';

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.register(req.body);
      const safeData = getUserToClient(user);
      const accessToken = generateAccessToken(safeData);
      const refreshToken = generateRefreshToken(safeData);
      
      res
        .cookie(accessTokenName, accessToken, getCookieConfig(ACCESS_EXPIRES_MSEC))
        .cookie(refreshTokenName, refreshToken, getCookieConfig(REFRESH_EXPIRES_MSEC))
        .status(201).json({ success: true, data: safeData });
    } catch (err) {
      next(err);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.login(req.body.email, req.body.password);
      const safeData = getUserToClient(user);
      const accessToken = generateAccessToken(safeData);
      const refreshToken = generateRefreshToken(safeData);
      
      res
        .cookie(accessTokenName, accessToken, getCookieConfig(ACCESS_EXPIRES_MSEC))
        .cookie(refreshTokenName, refreshToken, getCookieConfig(REFRESH_EXPIRES_MSEC))
        .json(safeData);
    } catch (err) {
      next(err);
    }
  }

  static async refresh(req: Request, res: Response, next: NextFunction) {  
    try {
      const token = req.signedCookies.refreshToken;
      if (!token) {
        res.sendStatus(401);
        return;
      }

      const decoded: any = jwt.verify(token, REFRESH_SECRET);
      const { tokenId } = decoded;

      if (!refreshTokens[tokenId]) {
        res.status(403).send('Invalid refresh token');
        return;
      }

      const safeData = _.cloneDeep(refreshTokens[tokenId]);
      delete refreshTokens[tokenId];
      const newAccessToken = generateAccessToken(safeData);
      const newRefreshToken = generateRefreshToken(safeData);
      res.cookie(accessTokenName, newAccessToken, getCookieConfig(ACCESS_EXPIRES_MSEC));
      res.cookie(refreshTokenName, newRefreshToken, getCookieConfig(REFRESH_EXPIRES_MSEC));
  
      res.send({ message: 'Token refreshed' });
    } catch (err) {
      res.sendStatus(403).json({ message: "Token doesn't refreshed" });
      return;
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.signedCookies.refreshToken;

      if (token) {
        try {
          const { tokenId }: any = jwt.verify(token, REFRESH_SECRET);
          delete refreshTokens[tokenId];
        } catch {
          res.sendStatus(401);
          return;
        }
      }
    
      res.clearCookie(accessTokenName);
      res.clearCookie(refreshTokenName);
      res.send({ message: 'Logged out' });
    } catch (err) {
      console.log(err);
    }
  }
};

export default AuthController;