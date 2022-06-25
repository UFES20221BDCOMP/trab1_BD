import { IMeatsRepository } from "../../repositories/IMeatsRepository";

interface IRequest {
    name: string;
    price: number;
}

class CreateMeatUseCase {
    constructor(private meatsRepository: IMeatsRepository) { }

    execute({ name, price }: IRequest): void {

        const meatAlreadyExists = this.meatsRepository.findByName(name);

        if (meatAlreadyExists) {
            throw new Error("Meat already exists");
        }
        this.meatsRepository.create({
            name,
            price,
        });
    }
}

export { CreateMeatUseCase };