import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { CreateOrderController } from '../modules/pizzas/useCases/createOrder/CreateOrderController';
import { ListOrdersController } from '../modules/pizzas/useCases/listOrders/ListOrdersControllers';    

const ordersRoutes = Router();

const createOrderController = new CreateOrderController();

const createListController = new ListOrdersController();

ordersRoutes.post("/", createOrderController.handle);

ordersRoutes.get("/", createListController.handle);

export { ordersRoutes };