import { ISizesRepository } from "../../repositories/ISizesRepository";


interface IRequest {
    name: string;
    price: number;
}

class CreateSizeUseCase {
    constructor(private sizesRepository: ISizesRepository) { }

    execute({ name, price}: IRequest): void {
        const sizeAlreadyExists= this.sizesRepository.findByName(name);

        if(sizeAlreadyExists) {
            throw new Error("Size already exists");
        }

        this.sizesRepository.create({
            name,
            price,
        })
    }
}

export { CreateSizeUseCase };