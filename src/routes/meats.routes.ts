import { Router } from "express";
import { CreateMeatController } from "../modules/pizzas/useCases/createMeat/CreateMeatController";
import { ImportMeatController } from "../modules/pizzas/useCases/importMeat/ImportMeatController";
import { ListMeatsController } from "../modules/pizzas/useCases/listMeats/ListMeatsController";
import multer from 'multer';

const upload = multer({
    dest: "./tmp",
});

const meatsRoutes = Router();

const createMeatController = new CreateMeatController();

const listMeatsController = new ListMeatsController();

const importMeatController = new ImportMeatController();

meatsRoutes.post("/", createMeatController.handle);

meatsRoutes.get("/", listMeatsController.handle);

meatsRoutes.post("/import", upload.single("file"), importMeatController.handle)

export { meatsRoutes }