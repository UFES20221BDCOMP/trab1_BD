import { SizesRepository } from "../../repositories/implementations/SizesRepository";
import { ListSizesController } from "./ListSizesController";
import { ListSizesUseCase } from "./ListSizesUseCase";

const sizesRepository = SizesRepository.getInstance();
const listSizesUseCase = new ListSizesUseCase(sizesRepository);
const listSizesController = new ListSizesController(listSizesUseCase);

export { listSizesController};