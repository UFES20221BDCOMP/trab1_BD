import { Router } from 'express';
import { meatsRoutes } from './meats.routes';
import { saucesRoutes } from './sauces.routes';
import { crustsRoutes } from './crusts.routes';
import { sizesRoutes } from './sizes.routes';

const router = Router();

router.use("/sauces", saucesRoutes);

router.use("/meats", meatsRoutes);

router.use("/crusts", crustsRoutes);

router.use("/sizes", sizesRoutes);

export { router };