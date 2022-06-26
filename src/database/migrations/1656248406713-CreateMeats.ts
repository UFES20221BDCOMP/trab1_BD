import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMeats1656248406713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "meats",
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
        await queryRunner.dropTable("meats");
    }

}
