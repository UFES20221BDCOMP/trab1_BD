import { Crust } from "../../entities/Crust";
import { ICrustsRepository } from "../../repositories/ICrustsRepository";


class ListCrustsUseCase {
    constructor(private crustsRepository: ICrustsRepository) { }

    execute(): Crust[] {
        const crusts = this.crustsRepository.list();

        return crusts;
    }

}

export { ListCrustsUseCase }