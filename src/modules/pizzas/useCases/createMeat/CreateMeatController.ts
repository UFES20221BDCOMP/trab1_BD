import { Request, Response } from "express";
import { CreateMeatUseCase } from "./CreateMeatUseCase";

class CreateMeatController {

    constructor(private createMeatUseCase: CreateMeatUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const { name, price } = request.body;

        this.createMeatUseCase.execute({ name, price });

        return response.status(201).send();
    }
}

export { CreateMeatController };
