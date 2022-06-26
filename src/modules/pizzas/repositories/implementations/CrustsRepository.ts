import { getRepository, Repository } from "typeorm";
import { Crust } from "../../entities/Crust";
import { ICrustsRepository, ICreateCrustsDTO } from ".././ICrustsRepository";

class CrustsRepository implements ICrustsRepository {

    private repository: Repository<Crust>

    constructor() {
        this.repository = getRepository(Crust);
    }

    //criação de instâncias
    async create({ name, price }: ICreateCrustsDTO): Promise<void> {

        const crust = this.repository.create({
            name,
            price
        })

        await this.repository.save(crust);
    }

    //retorna lista das bordas registradas
    async list(): Promise<Crust[]> {

        const crusts = await this.repository.find();
        return crusts;
    }

    //utilizado para que não exitam isntâncias repetidas
    async findByName(name: string): Promise<Crust> {
        const crust = await this.repository.findOne({ name });
        return crust;
    }
}

export { CrustsRepository }