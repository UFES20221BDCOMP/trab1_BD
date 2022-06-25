import { Sauce } from "../model/Sauce"

//DTO => Data transfer object
interface ICreateSauceDTO {
    name: string;
    price: number;
}

interface ISaucesRepository {
    findByName(name: string): Sauce;
    list(): Sauce[];
    create({ name, price }: ICreateSauceDTO): void;
}

export { ISaucesRepository, ICreateSauceDTO }