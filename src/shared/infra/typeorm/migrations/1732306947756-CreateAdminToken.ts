import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdminToken1732306947756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        
        await queryRunner.createTable(
            new Table({
                name: 'admin_tokens',
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
                        name: 'admin_id',
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
                        name: 'AdminToken',
                        referencedTableName: 'Admin',
                        referencedColumnNames: ['id'],
                        columnNames: ['admin_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]
            }),
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin_tokens');
    }

}