import { Meat } from "../../entities/Meat";
import { inject, injectable } from "tsyringe";
import { IMeatsRepository } from "../../repositories/IMeatsRepository";

@injectable()
class ListMeatsUseCase {
    constructor(
        @inject("MeatsRepository")
        private meatsRepository: IMeatsRepository) { }

    async execute(): Promise<Meat[]> {
        const meats = await this.meatsRepository.list();

        return meats;
    }

}

export { ListMeatsUseCase }