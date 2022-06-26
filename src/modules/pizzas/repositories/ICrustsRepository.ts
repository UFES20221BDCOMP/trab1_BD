import { Crust } from "../entities/Crust";

interface ICreateCrustsDTO {
    name: string;
    price: number;
}

interface ICrustsRepository {
    findByName(name: string): Crust;
    list(): Crust[];
    create({ name, price }: ICreateCrustsDTO): void;
}

export { ICrustsRepository, ICreateCrustsDTO }