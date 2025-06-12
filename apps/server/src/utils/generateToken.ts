import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";
import { ACCESS_EXPIRES_IN, JWT_SECRET, REFRESH_EXPIRES_IN, REFRESH_SECRET } from "../config/dotenv.config.js";
import { IRegisterBody } from "../types/auth.type.js";
import { ApiError } from "./apiError.js";

export const refreshTokens: any = {}; // Хранилище (в проде — Redis/БД)

function generateAccessToken(data: IRegisterBody) {
  if (!JWT_SECRET) {
    throw new ApiError(500, "Missing JWT_SECRET!");
  }
  return jwt.sign(
    data, 
    JWT_SECRET as any, 
    { expiresIn: ACCESS_EXPIRES_IN as any }
  );
}

function generateRefreshToken(data: IRegisterBody) {
  if (!REFRESH_SECRET) {
    throw new ApiError(500, "Missing REFRESH_SECRET!");
  }
  const tokenId = uuidv4();
  const token = jwt.sign(
    { ...data, tokenId }, 
    REFRESH_SECRET as any, 
    { expiresIn: REFRESH_EXPIRES_IN as any }
  );
  refreshTokens[tokenId] = data;
  return token;
}

export {
  generateAccessToken,
  generateRefreshToken
};