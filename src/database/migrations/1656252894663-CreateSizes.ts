import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSizes1656252894663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sizes",
                columns: [
                    {
                        name: "name",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "price",
                        type: "int"
                    }
                ],
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sizes");
    }

}
