import { CrustsRepository } from "../../repositories/implementations/CrustsRepository";
import { ListCrustsUseCase } from "./ListCrustsUseCase";
import { ListCrustsController } from "./ListCrutsController";

const crustsRepository = CrustsRepository.getInstance();
const listCrustsUseCase = new ListCrustsUseCase(crustsRepository);
const listCrustsController = new ListCrustsController(listCrustsUseCase);

export { listCrustsController };