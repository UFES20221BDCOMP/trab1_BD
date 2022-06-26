import { Size } from "../entities/Size";

interface ICreateSizeDTO {
    name: string;
    price: number;
}

//ações que poderão ser feitas através do Insomnia
interface ISizesRepository {
    findByName(name: string): Promise<Size>;
    list(): Promise<Size[]>;
    create({ name, price }: ICreateSizeDTO): Promise<void>;
}

export { ISizesRepository, ICreateSizeDTO };