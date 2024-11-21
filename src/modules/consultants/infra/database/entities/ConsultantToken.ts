import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('consultant_tokens')
export default class ConsultantToken{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    consultant_id: number;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
    
    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date;


}