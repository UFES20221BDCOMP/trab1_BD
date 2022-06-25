import { Router } from "express";
import { MeatsRepository } from "../modules/pizzas/repositories/implementations/MeatsRepository";
import { createMeatController } from "../modules/pizzas/useCases/createMeat";
import { listMeatsController } from "../modules/pizzas/useCases/listMeat";

const meatsRoutes = Router();

meatsRoutes.post("/", (request, response) => {
    return createMeatController.handle(request, response);
});

meatsRoutes.get("/", (request, response) => {
    return listMeatsController.handle(request, response);
})

export { meatsRoutes }