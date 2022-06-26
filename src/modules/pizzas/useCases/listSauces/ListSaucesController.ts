import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSaucesUseCase } from './ListSaucesUseCase';


class ListSaucesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listSaucesUseCase = container.resolve(ListSaucesUseCase);

        const all = await listSaucesUseCase.execute();

        return response.json(all);
    }
}

export { ListSaucesController };