import { Router } from 'express';
import { createSauceController } from '../modules/pizzas/useCases/createSauce';
import { listSaucesController } from '../modules/pizzas/useCases/listSauces';

const saucesRoutes = Router();

saucesRoutes.post("/", (request, response) => {
    return createSauceController.handle(request, response);
});

saucesRoutes.get("/", (request, response) => {
    return listSaucesController.handle(request, response);
})

export { saucesRoutes };