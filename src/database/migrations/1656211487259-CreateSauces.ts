import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSauces1656211487259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sauces",
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
        await queryRunner.dropTable("sauces");
    }

}
