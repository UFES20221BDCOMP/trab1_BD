import { SaucesRepository } from "../../repositories/implementations/SaucesRepository";
import { CreateSauceController } from "./CreateSauceController";
import { CreateSauceUseCase } from "./CreateSauceUseCase";

const saucesRepository = SaucesRepository.getInstance();

const createSauceUseCase = new CreateSauceUseCase(saucesRepository);

const createSauceController = new CreateSauceController(createSauceUseCase);

export { createSauceController };