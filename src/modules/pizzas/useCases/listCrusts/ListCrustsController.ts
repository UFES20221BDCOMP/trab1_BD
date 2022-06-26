import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCrustsUseCase } from "./ListCrustsUseCase";


class ListCrustsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listCrustsUseCase = container.resolve(ListCrustsUseCase);

        const all = await listCrustsUseCase.execute();

        return response.json(all);
    }
}

export { ListCrustsController };