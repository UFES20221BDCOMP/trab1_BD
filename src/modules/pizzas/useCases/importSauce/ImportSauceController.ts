import { Request, Response } from "express";
import { ImportSauceUseCase } from "./ImportSauceUseCase";


class ImportSauceController {

    constructor(private importSauceUseCase: ImportSauceUseCase) { }

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importSauceUseCase.execute(file);

        return response.send();
    }
}

export { ImportSauceController }