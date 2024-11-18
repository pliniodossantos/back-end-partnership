
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Customers')
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;
    
    @Column({type: 'text'})
    email: string;

    @Column({type: 'text'})
    cpfOrCnpj: string;

    @Column({type: 'text'})
    password: string;

    @Column({type: "bool"})
    active: boolean;

    @CreateDateColumn({type: 'date'})
    birthday: Date;

    @Column({type: 'text'})
    complement: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;

}

