import { Column, Entity, PrimaryColumn } from "typeorm";
// criação de entidades para molhos de pizzas
@Entity("sauces")
class Sauce {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;
}

export { Sauce };