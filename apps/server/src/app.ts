import express, { Express } from "express";
import morgan from 'morgan';
import {COOKIE_SECRET, NODE_ENV} from "./config/dotenv.config.js";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmetConfig from "./config/helmet.config.js";
import { globalErrorHandler, mongoErrorHandler, notFoundMiddleware, securityMiddleware } from "./middlewares/index.js";
import authRouter from "./routes/auth.route.js";
import protectedRouter from "./routes/protected.route.js";
import { connectDB } from "./config/mongo.config.js";
import planRouter from "./routes/plan.route.js";

const createApp = (): Express => {
  const app = express();

  if (NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

  app.use(helmet(helmetConfig));

  app.use(cors({origin: [
    "http://localhost:3000",
    "https://multy-step-form-ckoppcefb-temirkhan42s-projects.vercel.app/"
  ]}));

  app.use(securityMiddleware);

  app.use(express.urlencoded({ extended: false }));

  app.use(express.json());

  app.use(cookieParser(COOKIE_SECRET));

  connectDB();

  app.use('/api/v1/', authRouter);

  app.use('/api/v1/', planRouter);

  app.use('/api/v1/protected', protectedRouter);

  app.use(notFoundMiddleware);

  app.use(mongoErrorHandler);

  app.use(globalErrorHandler);

  return app;
};

export default createApp;