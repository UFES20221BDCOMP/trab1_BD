import { Router } from 'express';
import { meatsRoutes } from './meats.routes';
import { saucesRoutes } from './sauces.routes';

const router = Router();

router.use("/sauces", saucesRoutes);

router.use("/meats", meatsRoutes);

export { router };