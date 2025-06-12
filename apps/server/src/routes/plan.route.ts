import {Router} from 'express';
import PlanController from '../controllers/plan.controller.js';

const planRouter = Router();

planRouter.get('/plans', PlanController.getPlans);
planRouter.get('/addons', PlanController.getAddons);

export default planRouter;