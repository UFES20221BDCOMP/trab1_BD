import { Router } from "express";
import multer from "multer";
import { CreateSizeController } from "../modules/pizzas/useCases/createSize/CreateSizeController";
import { ImportSizeController } from "../modules/pizzas/useCases/importSize/ImportSizeController";
import { ListSizesController } from "../modules/pizzas/useCases/listSizes/ListSizesController";

const sizesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createSizeController = new CreateSizeController();

const listSizesController = new ListSizesController();

const importSizeController = new ImportSizeController();

sizesRoutes.post("/", createSizeController.handle);

sizesRoutes.get("/", listSizesController.handle);

sizesRoutes.post("/import", upload.single("file"), importSizeController.handle);

export { sizesRoutes }