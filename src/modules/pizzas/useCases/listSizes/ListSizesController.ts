import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSizesUseCase } from "./ListSizesUseCase";

class ListSizesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listSizesUseCase = container.resolve(ListSizesUseCase);

        const all = await listSizesUseCase.execute();

        return response.json(all);
    }
}

export { ListSizesController };