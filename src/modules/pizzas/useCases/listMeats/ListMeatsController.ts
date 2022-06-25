import { Request, Response } from "express";
import { ListMeatsUseCase } from "./ListMeatsUseCase";


class ListMeatsController {
    constructor(private listMeatsUseCase: ListMeatsUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listMeatsUseCase.execute();

        return response.json(all);
    }
}

export { ListMeatsController };