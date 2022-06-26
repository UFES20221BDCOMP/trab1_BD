import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("meats")
class Meat {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;

}

export { Meat };