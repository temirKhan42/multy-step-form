import { Addonn } from '../models/addons.model.js';
import { Plan  } from '../models/plan.model.js';

export class PlanService {
  static async getPlans() {
    return await Plan.find();
  }

  static async getAddons() {
    return await Addonn.find();
  }
}