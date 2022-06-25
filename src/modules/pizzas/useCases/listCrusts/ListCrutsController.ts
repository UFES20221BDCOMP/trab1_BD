import { Request, Response } from "express";
import { ListCrustsUseCase } from "./ListCrustsUseCase";


class ListCrustsController {
    constructor(private listCrustsUseCase: ListCrustsUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listCrustsUseCase.execute();

        return response.json(all);
    }
}

export { ListCrustsController };