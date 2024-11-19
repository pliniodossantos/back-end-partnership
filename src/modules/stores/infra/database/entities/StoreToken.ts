import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('store_tokens')
export default class StoreToken{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    store_id: number;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;


}