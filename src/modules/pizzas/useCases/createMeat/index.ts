import { MeatsRepository } from "../../repositories/implementations/MeatsRepository";
import { CreateMeatController } from "./CreateMeatController";
import { CreateMeatUseCase } from "./CreateMeatUseCase";


const meatsRepository = MeatsRepository.getInstance();
const createMeatUseCase = new CreateMeatUseCase(meatsRepository);
const createMeatController = new CreateMeatController(createMeatUseCase);

export { createMeatController }