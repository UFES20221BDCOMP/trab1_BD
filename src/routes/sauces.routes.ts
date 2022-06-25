import { createSauceController } from '../modules/pizzas/useCases/createSauce';
import { listSaucesController } from '../modules/pizzas/useCases/listSauces';
import { Router } from 'express';
import multer from 'multer';
import { importSauceController } from '../modules/pizzas/useCases/importSauce';

const saucesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

saucesRoutes.post("/", (request, response) => {
    return createSauceController.handle(request, response);
});

saucesRoutes.get("/", (request, response) => {
    return listSaucesController.handle(request, response);
})

saucesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importSauceController.handle(request, response);
})

export { saucesRoutes };