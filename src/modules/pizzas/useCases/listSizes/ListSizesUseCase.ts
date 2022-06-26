import { inject, injectable } from "tsyringe";
import { Size } from "../../entities/Size";
import { ISizesRepository } from "../../repositories/ISizesRepository";

@injectable()
class ListSizesUseCase {
    constructor(
        @inject("SizesRepository")
        private sizesRepository: ISizesRepository) { }

    async execute(): Promise<Size[]> {
        const sizes = await this.sizesRepository.list();

        return sizes;
    }
}

export { ListSizesUseCase }