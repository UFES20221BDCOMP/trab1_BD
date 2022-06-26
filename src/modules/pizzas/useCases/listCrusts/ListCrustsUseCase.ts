import { inject, injectable } from "tsyringe";
import { Crust } from "../../entities/Crust";
import { ICrustsRepository } from "../../repositories/ICrustsRepository";

@injectable()
class ListCrustsUseCase {
    constructor(
        @inject("CrustsRepository")
        private crustsRepository: ICrustsRepository) { }

    async execute(): Promise<Crust[]> {
        const crusts = await this.crustsRepository.list();

        return crusts;
    }

}

export { ListCrustsUseCase }