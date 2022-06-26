import { inject, injectable } from "tsyringe";
import { IMeatsRepository } from "../../repositories/IMeatsRepository";

interface IRequest {
    name: string;
    price: number;
}

@injectable()
class CreateMeatUseCase {
    constructor(
        @inject("MeatsRepository")
        private meatsRepository: IMeatsRepository) { }

    async execute({ name, price }: IRequest): Promise<void> {

        const meatAlreadyExists = await this.meatsRepository.findByName(name);

        if (meatAlreadyExists) {
            throw new Error("Meat already exists");
        }
        await this.meatsRepository.create({
            name,
            price,
        });
    }
}

export { CreateMeatUseCase };