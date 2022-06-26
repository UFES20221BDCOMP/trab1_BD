import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportSauceUseCase } from "./ImportSauceUseCase";


class ImportSauceController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importSauceUseCase = container.resolve(ImportSauceUseCase);

        await importSauceUseCase.execute(file);

        return response.send();
    }
}

export { ImportSauceController }