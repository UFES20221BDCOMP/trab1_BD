import { Sauce } from "../model/Sauce";
import { ISaucesRepository, ICreateSauceDTO } from "./ISaucesRepository";

class PostgresSaucesRepository implements ISaucesRepository {
    findByName(name: string): Sauce {
        console.log(name);
        return null;
    }
    list(): Sauce[] {
        return null;
    }
    create({ name, price }: ICreateSauceDTO): void {
        console.log(name, price);
    }

}

export { PostgresSaucesRepository }