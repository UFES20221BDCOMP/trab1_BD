import { MeatsRepository } from "../../repositories/implementations/MeatsRepository";
import { ListMeatsUseCase } from "./ListMeatsUseCase";
import { ListMeatsController } from "./ListMeatsController";


const meatsRepository = MeatsRepository.getInstance();
const listMeatsUseCase = new ListMeatsUseCase(meatsRepository);
const listMeatsController = new ListMeatsController(listMeatsUseCase);

export { listMeatsController };