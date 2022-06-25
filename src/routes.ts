import { Request, Response } from 'express'
import CreateSauceService from './CreateSauceService'

export function createSauce(request: Request, response: Response) {
    CreateSauceService.execute({
        name: "Branco",
        price: 4
    });

    CreateSauceService.execute({
        name: "Tomate",
        price: 3
    });

    return response.send();
}