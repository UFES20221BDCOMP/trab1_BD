import { Request, Response } from "express";
import { CreateSizeUseCase } from "./CreateSizeUseCase";


class CreateSizeController {
    constructor(private createSizeUseCase: CreateSizeUseCase) {

    }

    handle(request: Request, response: Response): Response{
        const{ name, price } = request.body;
        
        this.createSizeUseCase.execute({name, price});
        
        return response.status(201).send();

    }
}

export { CreateSizeController };