
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
      
    @Column()
    consultant_id: number;

    @Column()
    store_id: number;

    @Column()
    customer_id: number;

    @Column({type: "bool"})
    pending: boolean;

    @Column()
    points_customer: number;

    @Column()
    points_consulant: number;

    @CreateDateColumn({type: 'date'})
    created_at: Date;

    @CreateDateColumn({type: 'date'})
    expires_at: Date;

    @Column({type: 'text'})
    obs: string;
}

