import { Sauce } from "../entities/Sauce"

//DTO => Data transfer object
interface ICreateSauceDTO {
    name: string;
    price: number;
}

//ações que poderão ser feitas através do Insomnia
interface ISaucesRepository {
    findByName(name: string): Promise<Sauce>;
    list(): Promise<Sauce[]>;
    create({ name, price }: ICreateSauceDTO): Promise<void>;
}

export { ISaucesRepository, ICreateSauceDTO }