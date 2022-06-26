import { Column, Entity, PrimaryColumn } from "typeorm";
// crianção de entidades para carnes de pizzas
@Entity("meats")
class Meat {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

}

export { Meat };