import { Router } from "express";
import { createSizeController } from "../modules/pizzas/useCases/createSize";
import { listSizesController } from "../modules/pizzas/useCases/listSizes";

const sizesRoutes = Router();

sizesRoutes.post("/", (request, response) => {
    return createSizeController.handle(request, response);
});

sizesRoutes.get("/", (request, response) => {
    return listSizesController.handle(request, response);
})

export { sizesRoutes }