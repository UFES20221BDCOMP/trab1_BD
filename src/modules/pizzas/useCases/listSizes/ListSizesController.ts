import { Request, Response } from "express";
import { ListSizesUseCase } from "./ListSizesUseCase";

class ListSizesController {
    constructor(private listSizesUseCase: ListSizesUseCase) {}

    handle (request: Request, response: Response): Response {
        const all = this.listSizesUseCase.execute();

        return response.json(all);
    }
}

export { ListSizesController };