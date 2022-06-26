import { Router } from "express";
import { CreateSizeController } from "../modules/pizzas/useCases/createSize/CreateSizeController";
import { ListSizesController } from "../modules/pizzas/useCases/listSizes/ListSizesController";

const sizesRoutes = Router();

const createSizeController = new CreateSizeController();
const listSizesController = new ListSizesController();

sizesRoutes.post("/", createSizeController.handle);

sizesRoutes.get("/", listSizesController.handle);

export { sizesRoutes }