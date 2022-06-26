import { getRepository, Repository } from "typeorm";
import { Order } from "../../entities/Order";
import { Sauce } from "../../entities/Sauce";
import { ICreateOrderDTO, IOrdersRepository } from ".././IOrdersRepository";

class OrdersRepository implements IOrdersRepository {

    private repository: Repository<Order>;

    constructor() {
        this.repository = getRepository(Order);
    }

    async create({ clientName, sauce, meat, crust, size, totalPrice }: ICreateOrderDTO): Promise<void> {
        const order = this.repository.create({
            clientName,
            sauce,
            meat,
            crust,
            size,
            totalPrice
        })

        await this.repository.save(order);
    }

    //retorna lista dos pedidos registrados
    async list(): Promise<Order[]> {
        const orders = await this.repository.find();
        return orders;
    }

    //utilizado para que não exitam isntâncias repetidas
    async findByName(clientName: string): Promise<Order> {
        const order = await this.repository.findOne({ clientName });
        return order;
    }
    
    /*
    async getSauce(sauce: Sauce): Promise<Sauce[]> {
        return this.repository.find({relations: ['sauce']});
    }*/

}

export { OrdersRepository }