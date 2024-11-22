import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1732287891350 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: 'Orders',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'consultant_id',
                        type: 'integer',
                    },
                    {
                        name: 'store_id',
                        type: 'integer',
                    },
                    {
                        name: 'customer_id',
                        type: 'integer',
                    },
                    {
                        name: 'pending',
                        type: 'boolean',
                        default: 'true',
                    },
                    {
                        name: 'points_customer',
                        type: 'integer',
                    },
                    {
                        name: 'points_consulant',
                        type: 'integer',
                    },
                    {
                        name: 'created_at',
                        type: 'date',
                        default: 'now()',
                    },
                    {
                        name: 'expires_at',
                        type: 'date',
                    },
                    {
                        name: 'obs',
                        type: 'varchar',
                    },
                ],foreignKeys:[
                    {
                        name: 'ConsultantOrder',
                        referencedTableName: 'Consultants',
                        referencedColumnNames: ['id'],
                        columnNames: ['consultant_id'],
                    },
                    {
                        name: 'StoreOrder',
                        referencedTableName: 'Stores',
                        referencedColumnNames: ['id'],
                        columnNames: ['store_id'],
                    },
                    {
                        name: 'CustomerOrder',
                        referencedTableName: 'Customers',
                        referencedColumnNames: ['id'],
                        columnNames: ['customer_id'],
                    }
                ]
            }),
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Orders');
    }

}
