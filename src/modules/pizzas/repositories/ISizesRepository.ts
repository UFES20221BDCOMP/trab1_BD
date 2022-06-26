import { Size } from "../model/Size";

interface ICreateSizeDTO{
    name: string;
    price: number;
}

interface ISizesRepository{
    findByName(name: string): Size;
    list(): Size[];
    create({ name, price }: ICreateSizeDTO): void;
}

export{ISizesRepository, ICreateSizeDTO};