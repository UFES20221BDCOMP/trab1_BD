import { Crust } from "../../model/Crust";
import { ICrustsRepository, ICreateCrustsDTO } from ".././ICrustsRepository";

class CrustsRepository implements ICrustsRepository {
    private crusts: Crust[];

    private static INSTANCE: CrustsRepository;

    private constructor() {
        this.crusts = [];
    }

    public static getInstance(): CrustsRepository {
        if (!CrustsRepository.INSTANCE) { //quando ainda nao tem instancia criada
            CrustsRepository.INSTANCE = new CrustsRepository();
        }
        return CrustsRepository.INSTANCE;
    }

    create({ name, price }: ICreateCrustsDTO): void {
        const crust = new Crust();

        Object.assign(crust, {
            name,
            price,
        })

        this.crusts.push(crust);
    }

    list(): Crust[] {
        return this.crusts
    }

    findByName(name: string): Crust {
        const crust = this.crusts.find((crust) => crust.name === name);
        return crust;
    }
}

export { CrustsRepository }