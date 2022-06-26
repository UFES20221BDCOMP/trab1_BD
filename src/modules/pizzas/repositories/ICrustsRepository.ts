import { Crust } from "../entities/Crust";

interface ICreateCrustsDTO {
    name: string;
    price: number;
}

interface ICrustsRepository {
    findByName(name: string): Promise<Crust>;
    list(): Promise<Crust[]>;
    create({ name, price }: ICreateCrustsDTO): Promise<void>;
}

export { ICrustsRepository, ICreateCrustsDTO }