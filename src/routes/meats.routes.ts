import { Router } from "express";
import { CreateMeatController } from "../modules/pizzas/useCases/createMeat/CreateMeatController";
import { ListMeatsController } from "../modules/pizzas/useCases/listMeats/ListMeatsController";

const meatsRoutes = Router();

const createMeatController = new CreateMeatController();
const listMeatsController = new ListMeatsController();

meatsRoutes.post("/", createMeatController.handle);

meatsRoutes.get("/", listMeatsController.handle);

export { meatsRoutes }