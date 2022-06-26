import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCrusts1656252820113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "crusts",
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
        await queryRunner.dropTable("crusts");
    }

}
