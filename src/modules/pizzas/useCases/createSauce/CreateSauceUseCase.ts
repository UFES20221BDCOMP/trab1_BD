import { inject, injectable } from "tsyringe"
import { ISaucesRepository } from "../../repositories/ISaucesRepository";

interface IRequest {
    name: string;
    price: number;
}

@injectable()
class CreateSauceUseCase {
    constructor(
        @inject("SaucesRepository")
        private saucesRepository: ISaucesRepository) { }

    async execute({ name, price }: IRequest): Promise<void> {

        const sauceAlreadyExists = await this.saucesRepository.findByName(name);

        if (sauceAlreadyExists) {
            throw new Error("Sauce already exists!");
        }

        this.saucesRepository.create({ name, price });
    }
}

export { CreateSauceUseCase }