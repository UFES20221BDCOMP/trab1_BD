import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("sizes")
class Size {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;
}

export { Size };