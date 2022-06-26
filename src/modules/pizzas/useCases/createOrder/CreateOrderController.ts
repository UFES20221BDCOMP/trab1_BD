import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';
import { container } from "tsyringe";

class CreateOrderController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { clientName, sauce, meat, crust, size, totalPrice } = request.body;

        const createOrderUseCase = container.resolve(CreateOrderUseCase)

        await createOrderUseCase.execute({
            clientName,
            sauce,
            meat,
            crust,
            size,
            totalPrice
        });

        return response.status(201).send();
    }
}

export { CreateOrderController }