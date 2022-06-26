import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { CreateOrderController } from '../modules/pizzas/useCases/createOrder/CreateOrderController';

const ordersRoutes = Router();

const createOrderController = new CreateOrderController();


ordersRoutes.post("/pizzas", createOrderController.handle);


export { ordersRoutes };