import { Sauce } from "../../model/Sauce";
import { ICreateSauceDTO, ISaucesRepository } from ".././ISaucesRepository";

class SaucesRepository implements ISaucesRepository {

    private sauces: Sauce[];

    private static INSTANCE: SaucesRepository;

    private constructor() {
        this.sauces = [];
    }

    public static getInstance(): SaucesRepository {
        if (!SaucesRepository.INSTANCE) { //quando ainda nao tem instancia criada
            SaucesRepository.INSTANCE = new SaucesRepository();
        }
        return SaucesRepository.INSTANCE;
    }


    create({ name, price }: ICreateSauceDTO): void {
        const sauce = new Sauce();

        Object.assign(sauce, {
            name,
            price
        })

        this.sauces.push(sauce);
    }

    list(): Sauce[] {
        return this.sauces
    }

    findByName(name: string): Sauce {
        const sauce = this.sauces.find((sauce) => sauce.name === name);
        return sauce;
    }

}

export { SaucesRepository }