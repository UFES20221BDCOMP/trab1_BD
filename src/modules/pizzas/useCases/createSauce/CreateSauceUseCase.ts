import { ISaucesRepository } from "../../repositories/ISaucesRepository";

interface IRequest {
    name: string;
    price: number;
}

class CreateSauceUseCase {
    constructor(private saucesRepository: ISaucesRepository) { }

    execute({ name, price }: IRequest): void {

        const sauceAlreadyExists = this.saucesRepository.findByName(name);

        if (sauceAlreadyExists) {
            throw new Error("Sauce already exists!");
        }

        this.saucesRepository.create({ name, price });
    }
}

export { CreateSauceUseCase }