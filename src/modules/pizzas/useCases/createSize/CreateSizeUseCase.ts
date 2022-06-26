import { inject, injectable } from "tsyringe"
import { ISizesRepository } from "../../repositories/ISizesRepository";


interface IRequest {
    name: string;
    price: number;
}

@injectable()
class CreateSizeUseCase {
    constructor(
        @inject("SizesRepository")
        private sizesRepository: ISizesRepository) { }

    async execute({ name, price }: IRequest): Promise<void> {
        const sizeAlreadyExists = await this.sizesRepository.findByName(name);

        if (sizeAlreadyExists) {
            throw new Error("Size already exists");
        }

        await this.sizesRepository.create({
            name,
            price,
        })
    }
}

export { CreateSizeUseCase };