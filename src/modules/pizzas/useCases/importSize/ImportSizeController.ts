import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportSizeUseCase } from "./ImportSizeUseCase";


class ImportSizeController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importSizeUseCase = container.resolve(ImportSizeUseCase);

        await importSizeUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportSizeController }