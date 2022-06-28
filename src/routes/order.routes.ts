import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { CreateOrderController } from '../modules/pizzas/useCases/createOrder/CreateOrderController';
import { ListOrdersController } from '../modules/pizzas/useCases/listOrders/ListOrdersControllers';    
import multer from 'multer';
import { ImportOrderController } from '../modules/pizzas/useCases/importOrders/ImportOrderController';

const upload = multer({
    dest: "./tmp",
});

const ordersRoutes = Router();

const createOrderController = new CreateOrderController();

const listOrderController = new ListOrdersController();

const importOrderController = new ImportOrderController();

ordersRoutes.post("/", createOrderController.handle);

ordersRoutes.get("/", listOrderController.handle);

ordersRoutes.post("/import", upload.single("file"), importOrderController.handle)

export { ordersRoutes };