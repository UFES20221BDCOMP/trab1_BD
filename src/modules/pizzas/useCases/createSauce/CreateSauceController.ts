import { Request, Response } from 'express';
import { CreateSauceUseCase } from './CreateSauceUseCase';

class CreateSauceController {

    constructor(private createSauceUseCase: CreateSauceUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;

        await this.createSauceUseCase.execute({ name, price });

        return response.status(201).send();
    }
}

export { CreateSauceController }