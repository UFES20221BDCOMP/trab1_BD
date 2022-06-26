import { getRepository, Repository } from "typeorm";
import { Meat } from "../../entities/Meat";
import { IMeatsRepository, ICreateMeatsDTO } from ".././IMeatsRepository";

class MeatsRepository implements IMeatsRepository {

    private repository: Repository<Meat>;

    constructor() {
        this.repository = getRepository(Meat);
    }

    async create({ name, price }: ICreateMeatsDTO): Promise<void> {
        const specification = this.repository.create({ name, price });

        await this.repository.save(specification);
    }

    async list(): Promise<Meat[]> {
        const meats = await this.repository.find();
        return meats;
    }

    async findByName(name: string): Promise<Meat> {
        const meat = this.repository.findOne({ name });
        return meat;
    }
}

export { MeatsRepository }