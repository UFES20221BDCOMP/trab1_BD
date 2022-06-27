import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCrustUseCase } from "./ImportCrustUseCase";


class ImportCrustController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCrustUseCase = container.resolve(ImportCrustUseCase);

        await importCrustUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCrustController }