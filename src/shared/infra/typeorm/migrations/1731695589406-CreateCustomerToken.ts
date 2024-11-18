import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomerToken1731695589406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        
        await queryRunner.createTable(
            new Table({
                name: 'customer_tokens',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'token',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'customer_id',
                        type: 'integer',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys:[
                    {
                        name: 'CustomerTOken',
                        referencedTableName: 'Customers',
                        referencedColumnNames: ['id'],
                        columnNames: ['customer_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            }),
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customer_tokens');
    }

}