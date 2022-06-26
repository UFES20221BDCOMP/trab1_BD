import { Sauce } from "../entities/Sauce"

//DTO => Data transfer object
interface ICreateSauceDTO {
    name: string;
    price: number;
}

interface ISaucesRepository {
    findByName(name: string): Promise<Sauce>;
    list(): Promise<Sauce[]>;
    create({ name, price }: ICreateSauceDTO): Promise<void>;
}

export { ISaucesRepository, ICreateSauceDTO }