import { Router } from "express";
import { CreateCrustController } from "../modules/pizzas/useCases/createCrust/CreateCrustController";
import { ListCrustsController } from "../modules/pizzas/useCases/listCrusts/ListCrustsController";

const crustsRoutes = Router();

const createCrustController = new CreateCrustController();
const listCrustsController = new ListCrustsController();

crustsRoutes.post("/", createCrustController.handle);

crustsRoutes.get("/", listCrustsController.handle);

export { crustsRoutes }