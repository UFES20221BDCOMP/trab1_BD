
import { SaucesRepository } from "../../repositories/implementations/SaucesRepository";
import { ListSaucesController } from "./ListSaucesController";
import { ListSaucesUseCase } from "./ListSaucesUseCase";

const saucesRepository = SaucesRepository.getInstance();
const listSaucesUseCase = new ListSaucesUseCase(saucesRepository);
const listSaucesController = new ListSaucesController(listSaucesUseCase);

export { listSaucesController };