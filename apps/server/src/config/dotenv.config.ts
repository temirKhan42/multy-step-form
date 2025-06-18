import dotenv from "dotenv";
import { TNODEENV } from "../types/index.js";

const envPath = `env/.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({path: envPath});

export const NODE_ENV = process.env.NODE_ENV as TNODEENV || 'development';
export const PORT = process.env.PORT || '3000';
export const SSL_KEY_PATH = process.env.SSL_KEY_PATH!;
export const SSL_CERT_PATH = process.env.SSL_CERT_PATH!;
export const MONGO_URI = process.env.MONGO_URI!;
export const JWT_SECRET: string = process.env.JWT_SECRET!;
export const REFRESH_SECRET = process.env.REFRESH_SECRET!;
export const ACCESS_EXPIRES_IN = process.env.ACCESS_EXPIRES_IN || '15m';
export const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN || '7d';
export const ACCESS_EXPIRES_MSEC = 15*60*1000;
export const REFRESH_EXPIRES_MSEC = 7*24*60*60*1000;
export const COOKIE_SECRET = process.env.COOKIE_SECRET!;
export const LOG_PATH_FROM_UTILS_LOGGER = process.env.LOG_PATH_FROM_UTILS_LOGGER!;
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN!;