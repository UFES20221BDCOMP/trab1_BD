import { Meat } from "../model/Meat";

interface ICreateMeatsDTO {
    name: string;
    price: number;
}

interface IMeatsRepository {
    findByName(name: string): Meat;
    list(): Meat[];
    create({name, price}: ICreateMeatsDTO): void;
}

export {IMeatsRepository, ICreateMeatsDTO}