import { Request, Response } from 'express';
import { CreateSauceUseCase } from './CreateSauceUseCase';
import { container } from "tsyringe";

class CreateSauceController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;

        const createSauceUseCase = container.resolve(CreateSauceUseCase)

        await createSauceUseCase.execute({
            name,
            price
        });

        return response.status(201).send();
    }
}

export { CreateSauceController }