
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('Admin')
export class Admin {
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

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;

}

