import { Meat } from "../../model/Meat";
import { IMeatsRepository } from "../../repositories/IMeatsRepository";


class ListMeatsUseCase {
    constructor(private meatsRepository: IMeatsRepository) { }

    execute(): Meat[] {
        const meats = this.meatsRepository.list();

        return meats;
    }

}

export { ListMeatsUseCase }