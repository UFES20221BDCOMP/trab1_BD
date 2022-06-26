import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCrustUseCase } from "./CreateCrustUseCase";

class CreateCrustController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;

        const createCrustUseCase = container.resolve(CreateCrustUseCase)

        await createCrustUseCase.execute({
            name,
            price
        });

        return response.status(201).send();
    }
}

export { CreateCrustController };