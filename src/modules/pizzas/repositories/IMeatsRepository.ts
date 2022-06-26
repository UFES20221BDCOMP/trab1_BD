import { Meat } from "../entities/Meat";

interface ICreateMeatsDTO {
    name: string;
    price: number;
}

//ações que poderão ser feitas através do Insomnia
interface IMeatsRepository {
    findByName(name: string): Promise<Meat>;
    list(): Promise<Meat[]>;
    create({ name, price }: ICreateMeatsDTO): Promise<void>;
}

export { IMeatsRepository, ICreateMeatsDTO }