import { Router } from "express";
import { createCrustController } from "../modules/pizzas/useCases/createCrust";
import { listCrustsController } from "../modules/pizzas/useCases/listCrusts";

const crustsRoutes = Router();

crustsRoutes.post("/", (request, response) => {
    return createCrustController.handle(request, response);
});

crustsRoutes.get("/", (request, response) => {
    return listCrustsController.handle(request, response);
})

export { crustsRoutes }