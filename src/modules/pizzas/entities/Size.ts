import { Column, Entity, PrimaryColumn } from "typeorm";
// crianção de entidades para tamanhos de pizzas
@Entity("sizes")
class Size {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;
}

export { Size };