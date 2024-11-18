import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customer_tokens')
export default class CustomerToken{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    customer_id: number;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;


}