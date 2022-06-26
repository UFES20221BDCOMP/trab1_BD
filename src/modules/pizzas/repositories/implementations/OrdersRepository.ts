import { getRepository, Repository } from "typeorm";
import { Order } from "../../entities/Order";
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

    async list(): Promise<Order[]> {
        const orders = await this.repository.find();
        return orders;
    }

    async findByName(clientName: string): Promise<Order> {
        const order = await this.repository.findOne({ clientName });
        return order;
    }

}

export { OrdersRepository }