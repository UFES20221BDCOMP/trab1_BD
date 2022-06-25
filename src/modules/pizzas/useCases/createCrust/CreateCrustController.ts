import { Request, Response } from "express";
import { CreateCrustUseCase } from "./CreateCrustUseCase";

class CreateCrustController {

    constructor(private createCrustUseCase: CreateCrustUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const { name, price } = request.body;

        this.createCrustUseCase.execute({ name, price });

        return response.status(201).send();
    }
}

export { CreateCrustController };