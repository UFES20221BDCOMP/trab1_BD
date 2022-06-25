import { Meat } from "../model/Meat";
import { IMeatsRepository, ICreateMeatsDTO } from "./IMeatsRepository";

class MeatsRepository implements IMeatsRepository {
    private meats: Meat[];

    constructor(){
        this.meats = [];
    }
    create({ name, price }: ICreateMeatsDTO): void {
        const meat = new Meat();

        Object.assign(meat,{
            name,
            price,
        })

        this.meats.push(meat);
    }

    list(): Meat[] {
        return this.meats
    }

    findByName(name: string): Meat {
        const meat = this.meats.find((meat) => meat.name === name);
        return meat;
    }
}

export { MeatsRepository }