import { SaucesRepository } from "../../repositories/implementations/SaucesRepository";
import { CreateSauceController } from "./CreateSauceController";
import { CreateSauceUseCase } from "./CreateSauceUseCase";

export default (): CreateSauceController => {
    const saucesRepository = new SaucesRepository();

    const createSauceUseCase = new CreateSauceUseCase(saucesRepository);

    const createSauceController = new CreateSauceController(createSauceUseCase);

    return createSauceController;
}