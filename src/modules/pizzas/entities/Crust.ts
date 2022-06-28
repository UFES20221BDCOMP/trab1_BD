import { Column, Entity, PrimaryColumn } from "typeorm";
// criação de entidades para bordas de pizzas
@Entity("crusts")
class Crust {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

}

export { Crust };