import { SizesRepository } from "../../repositories/implementations/SizesRepository";
import { CreateSizeController } from "./CreateSizeController";
import { CreateSizeUseCase } from "./CreateSizeUseCase";

const sizesRepository = SizesRepository.getInstance();
const createSizeUseCase = new CreateSizeUseCase (sizesRepository);
const createSizeController = new CreateSizeController(createSizeUseCase); //

export { createSizeController, createSizeUseCase}