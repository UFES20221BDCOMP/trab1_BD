import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1656259930300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "clientName",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "sauce",
                        type: "varchar"
                    },
                    {
                        name: "meat",
                        type: "varchar"
                    },
                    {
                        name: "crust",
                        type: "varchar"
                    },
                    {
                        name: "size",
                        type: "varchar"
                    },
                    {
                        name: "totalPrice",
                        type: "int"
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSauce",
                        referencedTableName: "sauces",
                        referencedColumnNames: ["name"],
                        columnNames: ["sauce"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKMeat",
                        referencedTableName: "meats",
                        referencedColumnNames: ["name"],
                        columnNames: ["meat"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKSize",
                        referencedTableName: "sizes",
                        referencedColumnNames: ["name"],
                        columnNames: ["size"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKCrust",
                        referencedTableName: "crusts",
                        referencedColumnNames: ["name"],
                        columnNames: ["crust"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
