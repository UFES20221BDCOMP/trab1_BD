import { CrustsRepository } from "../../repositories/implementations/CrustsRepository";
import { CreateCrustController } from "./CreateCrustController";
import { CreateCrustUseCase } from "./CreateCrustUseCase";


const crustsRepository = CrustsRepository.getInstance();
const createCrustUseCase = new CreateCrustUseCase(crustsRepository);
const createCrustController = new CreateCrustController(createCrustUseCase);

export { createCrustController }