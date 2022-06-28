import { getRepository, Repository } from "typeorm";
import { Order } from "../../entities/Order";
import { Sauce } from "../../entities/Sauce";
import { ICreateOrderDTO, IOrdersRepository } from ".././IOrdersRepository";

class OrdersRepository implements IOrdersRepository {

    private repository: Repository<Order>;

    constructor() {
        this.repository = getRepository(Order);
    }
    //correção do quickfix
    query(arg0: string) {
        throw new Error("Method not implemented.");
    }

    async create({ clientName, sauce, meat, crust, size, totalPrice }: ICreateOrderDTO): Promise<void> {
        
        //captura o preço da sauce da order para acrescentar ao totalPrice da order
        const price1 =  await this.repository.query('SELECT price FROM "sauces" where sauces.name ILIKE $1', [sauce]);
        var s1 = JSON.stringify(price1);
        var d1 = JSON.parse(s1)[0].price;
        //console.log(d1);

        //captura o preço da meat da order para acrescentar ao totalPrice da order
        const price2 =  await this.repository.query('SELECT price FROM "meats" where meats.name ILIKE $1', [meat]);
        var s2 = JSON.stringify(price2);
        var d2 = JSON.parse(s2)[0].price;
        //console.log(d2);

        //captura o preço da sauce da crust para acrescentar ao totalPrice da order
        const price3 =  await this.repository.query('SELECT price FROM "crusts" where crusts.name ILIKE $1', [crust]);
        var s3 = JSON.stringify(price3);
        var d3 = JSON.parse(s3)[0].price;
        //console.log(d3);

        //captura o preço do size da order para acrescentar ao totalPrice da order
        const price4 =  await this.repository.query('SELECT price FROM "sizes" where sizes.name ILIKE $1', [size]);
        var s4 = JSON.stringify(price4);
        var d4 = JSON.parse(s4)[0].price;
        //console.log(d4);

        //soma o valor de cada atributo da pizza escolhidos na order para dar o valor final
        const total = d4 + d3 + d2 + d1;
        console.log(total);

        totalPrice = total;
        
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
        console.log(orders);
        return orders;
    }

    //utilizado para que não exitam instâncias repetidas
    async findByName(clientName: string): Promise<Order> {
        const order = await this.repository.findOne({ clientName });
        return order;
    }


}

export { OrdersRepository }