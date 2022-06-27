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
        

        const isThereTheSauce = await this.repository.query('SELECT * FROM "sauces" where sauces.name ILIKE $1', [sauce]);
        if (!isThereTheSauce){
            throw new Error("Sorry! Sauce not available today, please try again tomorrow");
        }

        const price1 =  await this.repository.query('SELECT price FROM "sauces" where sauces.name ILIKE $1', [sauce]);
        var s1 = JSON.stringify(price1);
        var d1 = JSON.parse(s1)[0].price;
        //console.log(d1);

        const price2 =  await this.repository.query('SELECT price FROM "meats" where meats.name ILIKE $1', [meat]);
        var s2 = JSON.stringify(price2);
        var d2 = JSON.parse(s2)[0].price;
        //console.log(d2);

        const price3 =  await this.repository.query('SELECT price FROM "crusts" where crusts.name ILIKE $1', [crust]);
        var s3 = JSON.stringify(price3);
        var d3 = JSON.parse(s3)[0].price;
        //console.log(d3);

        const price4 =  await this.repository.query('SELECT price FROM "sizes" where sizes.name ILIKE $1', [size]);
        var s4 = JSON.stringify(price4);
        var d4 = JSON.parse(s4)[0].price;
        //console.log(d4);

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
        return orders;
    }

    //utilizado para que não exitam instâncias repetidas
    async findByName(clientName: string): Promise<Order> {
        const order = await this.repository.findOne({ clientName });
        return order;
    }

    async procuraPorNome(clientName: string): Promise<Order[]> {
        const nomeCliente = await this.repository.query('SELECT * FROM "Order" as pedido where order.clientName ILIKE $1', [clientName]);
        return nomeCliente;
    }
    
    /*
    async getSauce(sauce: Sauce): Promise<Sauce[]> {
        return this.repository.find({relations: ['sauce']});
    }*/

}

export { OrdersRepository }