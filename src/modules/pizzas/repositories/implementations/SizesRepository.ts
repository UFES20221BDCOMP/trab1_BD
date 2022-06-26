import { getRepository, Repository } from "typeorm";
import { Size } from "../../entities/Size";
import { ICreateSizeDTO, ISizesRepository } from "../ISizesRepository";

class SizesRepository implements ISizesRepository {

    private repository: Repository<Size>;

    constructor() {
        this.repository = getRepository(Size);
    }

    async create({ name, price }: ICreateSizeDTO): Promise<void> {
        const size = this.repository.create({
            name,
            price
        })

        await this.repository.save(size);
    }

    async list(): Promise<Size[]> {
        const sizes = await this.repository.find();
        return sizes;
    }

    async findByName(name: string): Promise<Size> {
        const size = await this.repository.findOne({ name });
        return size;
    }



}

export { SizesRepository }