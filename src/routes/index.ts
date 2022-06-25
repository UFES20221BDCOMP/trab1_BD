import { Router } from 'express';
import { meatsRoutes } from './meats.routes';
import { saucesRoutes } from './sauces.routes';
import { crustsRoutes } from './crusts.routes';

const router = Router();

router.use("/sauces", saucesRoutes);

router.use("/meats", meatsRoutes);

router.use("/crusts", crustsRoutes);

export { router };