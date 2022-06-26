import { SaucesRepository } from "../../repositories/implementations/SaucesRepository";
import { ImportSauceController } from "./ImportSauceController";
import { ImportSauceUseCase } from "./ImportSauceUseCase";

const saucesRepository = null;
const importSauceUseCase = new ImportSauceUseCase(saucesRepository);
const importSauceController = new ImportSauceController(importSauceUseCase);

export { importSauceController }