
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Stores')
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;
    
    @Column({type: 'text'})
    email: string;

    @Column({type: 'text'})
    cnpj: string;

    @Column({type: 'text'})
    password: string;

    @Column({type: "bool"})
    active: boolean;

    @CreateDateColumn({type: 'date'})
    birthday: Date;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;

}

