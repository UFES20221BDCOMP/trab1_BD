import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Sauce } from './Sauce';
import { Meat } from './Meat';
import { Crust } from './Crust';
import { Size } from './Size';
// crianção de entidades para pedidos de pizzas
@Entity("orders")
class Order {

    @PrimaryColumn()
    id?: string;

    @Column()
    clientName: string;

    @OneToOne(() => Sauce)
    @JoinColumn()
    sauce: Sauce;

    @OneToOne(() => Meat)
    @JoinColumn()
    meat: Meat;

    @OneToOne(() => Crust)
    @JoinColumn()
    crust: Crust;

    @OneToOne(() => Size)
    @JoinColumn()
    size: Size;

    @Column()
    totalPrice: number;

    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Order }