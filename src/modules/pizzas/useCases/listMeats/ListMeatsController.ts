import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMeatsUseCase } from "./ListMeatsUseCase";


class ListMeatsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listMeatsUseCase = container.resolve(ListMeatsUseCase);

        const all = await listMeatsUseCase.execute();

        return response.json(all);
    }
}

export { ListMeatsController };