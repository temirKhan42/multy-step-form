import {CookieOptions} from "express";

const MAXAGE = 60*60*1000;

const getCookieConfig = (maxAge = MAXAGE) => {
  const cookieConfig: CookieOptions = {
    "httpOnly": true,
    "sameSite": "strict",
    "secure": true,
    "signed": true,
    "maxAge": maxAge
  };
  return cookieConfig;
};

export default getCookieConfig;