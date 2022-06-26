import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("sauces")
class Sauce {

    @PrimaryColumn()
    name: string;

    @Column()
    price: number;
}

export { Sauce };