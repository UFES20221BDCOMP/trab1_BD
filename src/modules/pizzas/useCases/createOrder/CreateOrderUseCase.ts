import { inject, injectable } from "tsyringe"
import { Crust } from "../../entities/Crust";
import { Meat } from "../../entities/Meat";
import { Sauce } from "../../entities/Sauce";
import { Size } from "../../entities/Size";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";


interface IRequest {
    clientName: string;
    sauce: Sauce;
    meat: Meat;
    crust: Crust;
    size: Size;
    totalPrice: number;
}

@injectable()
class CreateOrderUseCase {
    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository) { }

    async execute({ clientName, sauce, meat, crust, size, totalPrice }: IRequest): Promise<void> {
        const orderAlreadyExists = await this.ordersRepository.findByName(clientName);

        if (orderAlreadyExists) {
            throw new Error("Order already exists!");
        }

        await this.ordersRepository.create({
            clientName,
            sauce,
            meat,
            crust,
            size,
            totalPrice
        });
    }
}

export { CreateOrderUseCase }