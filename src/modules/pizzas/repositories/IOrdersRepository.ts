import { Crust } from "../entities/Crust";
import { Meat } from "../entities/Meat";
import { Order } from "../entities/Order"
import { Sauce } from "../entities/Sauce";
import { Size } from "../entities/Size";

interface ICreateOrderDTO {
    clientName: string;
    sauce: Sauce;
    meat: Meat;
    crust: Crust;
    size: Size;
    totalPrice: number;
}

//ações que poderão ser feitas através do Insomnia
interface IOrdersRepository {
    query(arg0: string);
    findByName(clientName: string): Promise<Order>;
    list(): Promise<Order[]>;
    create({ clientName, sauce, meat, crust, size, totalPrice }: ICreateOrderDTO): Promise<void>;
}

export { IOrdersRepository, ICreateOrderDTO }