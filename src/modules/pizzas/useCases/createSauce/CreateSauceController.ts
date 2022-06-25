import {Request, Response} from 'express';
import { CreateSauceUseCase } from './CreateSauceUseCase';

class CreateSauceController{

    constructor(private createSauceUseCase: CreateSauceUseCase){}

    handle(request: Request, response: Response):Response {
        const { name, price } = request.body;

        this.createSauceUseCase.execute({ name, price });

        return response.status(201).send();
    }
}

export { CreateSauceController }