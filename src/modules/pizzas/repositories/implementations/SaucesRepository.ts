import { getRepository, Repository } from "typeorm";
import { Sauce } from "../../entities/Sauce";
import { ICreateSauceDTO, ISaucesRepository } from ".././ISaucesRepository";

class SaucesRepository implements ISaucesRepository {

    private repository: Repository<Sauce>;

    constructor() {
        this.repository = getRepository(Sauce);
    }

    async create({ name, price }: ICreateSauceDTO): Promise<void> {

        const sauce = this.repository.create({
            name,
            price
        })

        await this.repository.save(sauce);
    }

    async list(): Promise<Sauce[]> {

        const sauces = await this.repository.find();
        return sauces;
    }

    async findByName(name: string): Promise<Sauce> {
        const sauce = await this.repository.findOne({ name });
        return sauce;
    }

}

export { SaucesRepository }