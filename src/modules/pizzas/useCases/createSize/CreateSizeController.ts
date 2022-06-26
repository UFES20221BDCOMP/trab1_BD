import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSizeUseCase } from "./CreateSizeUseCase";


class CreateSizeController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;

        const createSizeUseCase = container.resolve(CreateSizeUseCase)

        await createSizeUseCase.execute({
            name,
            price
        });

        return response.status(201).send();

    }
}

export { CreateSizeController };