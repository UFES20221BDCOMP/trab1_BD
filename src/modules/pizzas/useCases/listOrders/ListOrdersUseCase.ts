import { inject, injectable } from "tsyringe";
import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

@injectable()
class ListOrdersUseCase {
    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository) { }

    async execute(): Promise<Order[]> {
        const orders = await this.ordersRepository.list();

        return orders;
    }

}

export { ListOrdersUseCase }