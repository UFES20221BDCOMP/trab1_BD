import { Column, Entity, PrimaryColumn } from "typeorm";
// crianção de entidades para bordas de pizzas
@Entity("crusts")
class Crust {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

}

export { Crust };