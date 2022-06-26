import { Size } from "../../model/Size";
import { ISizesRepository } from "../../repositories/ISizesRepository";

class ListSizesUseCase {
    constructor(private sizesRepository: ISizesRepository) {}

    execute(): Size[]{
        const sizes = this.sizesRepository.list();

        return sizes;
    }
}

export { ListSizesUseCase }