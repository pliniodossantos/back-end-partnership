
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Consultants')
export class Consultant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    name: string;
    
    @Column({type: 'text'})
    email: string;

    @Column({type: 'text'})
    cpf: string;

    @Column({type: 'text'})
    password: string;

    @Column({type: "bool"})
    active: boolean;

    @CreateDateColumn({type: 'date'})
    birthday: Date;

    @Column()
    store_id: number;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;

}

