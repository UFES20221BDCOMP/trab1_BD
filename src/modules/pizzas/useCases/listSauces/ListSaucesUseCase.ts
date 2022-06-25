import { Sauce } from "../../model/Sauce";
import { ISaucesRepository } from "../../repositories/ISaucesRepository";


class ListSaucesUseCase {
    constructor(private saucesRepository: ISaucesRepository) {}

    execute(): Sauce[] {
        const sauces = this.saucesRepository.list();

        return sauces;
    }

}

export { ListSaucesUseCase}