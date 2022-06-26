import { inject, injectable } from "tsyringe";
import { Sauce } from "../../entities/Sauce";
import { ISaucesRepository } from "../../repositories/ISaucesRepository";


@injectable()
class ListSaucesUseCase {
    constructor(
        @inject("SaucesRepository")
        private saucesRepository: ISaucesRepository) { }

    async execute(): Promise<Sauce[]> {
        const sauces = await this.saucesRepository.list();

        return sauces;
    }

}

export { ListSaucesUseCase }