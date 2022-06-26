import { Request, Response } from "express";
import { CreateMeatUseCase } from "./CreateMeatUseCase";
import { container } from "tsyringe"

class CreateMeatController {



    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;

        const createMeatUseCase = container.resolve(CreateMeatUseCase);

        await createMeatUseCase.execute({
            name,
            price
        });

        return response.status(201).send();
    }
}

export { CreateMeatController };
