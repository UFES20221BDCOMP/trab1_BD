import {Request, Response} from 'express';
import { ListSaucesUseCase } from './ListSaucesUseCase';


class ListSaucesController {
    constructor(private listSaucesUseCase: ListSaucesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listSaucesUseCase.execute();
        
        return response.json(all);
    }
}

export { ListSaucesController };