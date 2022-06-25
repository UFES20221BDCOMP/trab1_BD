import { SaucesRepository } from "../../repositories/SaucesRepository";
import { CreateSauceController } from "./CreateSauceController";
import { CreateSauceUseCase } from "./CreateSauceUseCase";

const saucesRepository = new SaucesRepository();

const createSauceUseCase = new CreateSauceUseCase(saucesRepository);

const createSauceController = new CreateSauceController(createSauceUseCase);

export { createSauceController};