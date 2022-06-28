import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { inject, injectable } from "tsyringe";
import { Sauce } from "../../entities/Sauce";
import { Meat } from "../../entities/Meat";
import { CrustsRepository } from "../../repositories/implementations/CrustsRepository";
import { Size } from "../../entities/Size";
import { Crust } from "../../entities/Crust";

interface IImportOrder {
    clientName: string,
    sauce: Sauce,
    meat: Meat,
    crust: Crust,
    size: Size,
    totalPrice: number
}

@injectable()
class ImportOrderUseCase {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository) { }


    loadOrders(file: Express.Multer.File): Promise<IImportOrder[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const orders: IImportOrder[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [clientName,
                    sauce,
                    meat,
                    crust,
                    size,
                    totalPrice] = line;
                orders.push({
                    clientName,
                    sauce,
                    meat,
                    crust,
                    size,
                    totalPrice
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path); //remover o arquivo da pasta tmp após a utilização
                    resolve(orders);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const orders = await this.loadOrders(file);

        orders.map(async (order) => {
            const { clientName, sauce, meat,crust,size,totalPrice } = order;

            const existOrder = await this.ordersRepository.findByName(clientName);

            if (!existOrder) {
                await this.ordersRepository.create({
                    clientName,
                    sauce,
                    meat,
                    crust,
                    size,
                    totalPrice
                })
            }
        })
    }
}

export { ImportOrderUseCase }