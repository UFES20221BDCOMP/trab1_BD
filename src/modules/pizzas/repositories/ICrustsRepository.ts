import { Crust } from "../entities/Crust";

interface ICreateCrustsDTO {
    name: string;
    price: number;
}

//ações que poderão ser feitas através do Insomnia
interface ICrustsRepository {
    findByName(name: string): Promise<Crust>;
    list(): Promise<Crust[]>;
    create({ name, price }: ICreateCrustsDTO): Promise<void>;
}

export { ICrustsRepository, ICreateCrustsDTO }