import { ICrustsRepository } from "../../repositories/ICrustsRepository";

interface IRequest {
    name: string;
    price: number;
}

class CreateCrustUseCase {
    constructor(private crustsRepository: ICrustsRepository) { }

    execute({ name, price }: IRequest): void {

        const crustAlreadyExists = this.crustsRepository.findByName(name);

        if (crustAlreadyExists) {
            throw new Error("Crust already exists");
        }
        this.crustsRepository.create({
            name,
            price,
        });
    }
}

export { CreateCrustUseCase };