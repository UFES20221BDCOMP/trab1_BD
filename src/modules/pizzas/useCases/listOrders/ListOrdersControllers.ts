import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOrdersUseCase } from './ListOrdersUseCase';


class ListOrdersController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listOrdersUseCase = container.resolve(ListOrdersUseCase);

        const all = await listOrdersUseCase.execute();

        return response.json(all);
    }
}

export { ListOrdersController };