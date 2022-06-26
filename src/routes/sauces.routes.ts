import { ImportSauceController } from '../modules/pizzas/useCases/importSauce/ImportSauceController';
import { ListSaucesController } from '../modules/pizzas/useCases/listSauces/ListSaucesController';
import { CreateSauceController } from '../modules/pizzas/useCases/createSauce/CreateSauceController';
import { Router } from 'express';
import multer from 'multer';

const saucesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createSauceController = new CreateSauceController();

const importSauceController = new ImportSauceController();

const listSaucesController = new ListSaucesController();

saucesRoutes.post("/", createSauceController.handle);

saucesRoutes.get("/", listSaucesController.handle);

saucesRoutes.post("/import", upload.single("file"), importSauceController.handle)

export { saucesRoutes };