import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportMeatUseCase } from "./ImportMeatUseCase";


class ImportMeatController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importMeatUseCase = container.resolve(ImportMeatUseCase);

        await importMeatUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportMeatController }