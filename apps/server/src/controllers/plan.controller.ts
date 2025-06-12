import { NextFunction, Request, Response } from "express";
import { PlanService } from "../services/plan.service.js";

class PlanController {
  static async getPlans(req: Request, res: Response, next: NextFunction) {
    try {
      const plans = await PlanService.getPlans();
      res.json({ success: true, data: plans });
    } catch (err) {
      next(err);
    }
  }

  static async getAddons(req: Request, res: Response, next: NextFunction) {
    try {
      const addonns = await PlanService.getAddons();
      res.json({ success: true, data: addonns });
    } catch (err) {
      next(err);
    }
  }
}

export default PlanController;