import { inject, injectable } from "tsyringe"
import { ICrustsRepository } from "../../repositories/ICrustsRepository";

interface IRequest {
    name: string;
    price: number;
}

@injectable()
class CreateCrustUseCase {
    constructor(
        @inject("CrustsRepository")
        private crustsRepository: ICrustsRepository) { }

    async execute({ name, price }: IRequest): Promise<void> {

        const crustAlreadyExists = await this.crustsRepository.findByName(name);

        if (crustAlreadyExists) {
            throw new Error("Crust already exists");
        }
        await this.crustsRepository.create({
            name,
            price,
        });
    }
}

export { CreateCrustUseCase };