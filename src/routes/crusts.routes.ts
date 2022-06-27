import { Router } from "express";
import { CreateCrustController } from "../modules/pizzas/useCases/createCrust/CreateCrustController";
import { ListCrustsController } from "../modules/pizzas/useCases/listCrusts/ListCrustsController";
import { ImportCrustController } from "../modules/pizzas/useCases/importCrust/ImportCrustController";
import multer from 'multer';

const crustsRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCrustController = new CreateCrustController();

const listCrustsController = new ListCrustsController();

const importCrustController = new ImportCrustController();

crustsRoutes.post("/", createCrustController.handle);

crustsRoutes.get("/", listCrustsController.handle);

crustsRoutes.post("/import", upload.single("file"), importCrustController.handle)

export { crustsRoutes }