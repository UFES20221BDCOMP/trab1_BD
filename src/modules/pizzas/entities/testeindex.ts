import "reflect-metadata"; 
import {createConnection, getConnection} from "typeorm"; 
import { Order } from "./Order";
import { Sauce } from "./Sauce";

createConnection().then(asynnc connection => {
    await getConnection().createQueryBuilder().insert().into(Order).values([clientName: "Joao", sauce: "Tomate", meat: "Frango", crust: "catupiry", size: "pequena"]).execute();
})