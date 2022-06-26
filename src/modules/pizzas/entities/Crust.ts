import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("crusts")
class Crust {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

}

export { Crust };