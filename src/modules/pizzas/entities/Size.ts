import { Column, Entity, PrimaryColumn } from "typeorm";
// criação de entidades para tamanhos de pizzas
@Entity("sizes")
class Size {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;
}
export { Size };