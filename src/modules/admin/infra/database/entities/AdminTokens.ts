import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('admin_tokens')
export default class AdminTokens{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    admin_id: number;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;


}