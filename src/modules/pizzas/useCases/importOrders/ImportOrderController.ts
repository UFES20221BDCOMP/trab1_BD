import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportOrderUseCase } from "./ImportOrderUseCase";


class ImportOrderController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importOrderUseCase = container.resolve(ImportOrderUseCase);

        await importOrderUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportOrderController }