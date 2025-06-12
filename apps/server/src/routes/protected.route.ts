import {Router} from "express";
import {checkTokens} from "../middlewares/index.js";

const protectedRouter = Router();

protectedRouter.use(checkTokens);

export default protectedRouter;