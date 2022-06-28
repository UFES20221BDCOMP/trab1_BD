import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationContentSauce1656268155698 implements MigrationInterface {
    name = 'RelationContentSauce1656268155698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FKSauce"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FKMeat"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FKSize"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FKCrust"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "sauce"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "meat"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "crust"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "sauceName" character varying`);
        
        /* As seguintes queries foram comentadas pois impedem que algum item desses seja adicionado em mais de uma pizza devido ao UNIQUE */
        //await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_4c1f187ac9c6ca7575f0303e69a" UNIQUE ("sauceName")`);
        //await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_35d344a2b495981e5b3a0910adc" UNIQUE ("meatName")`);
        //await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_7172ea74547be37f06eb8140923" UNIQUE ("crustName")`);
        //await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_b4de6b778dcc7a224838cb679a0" UNIQUE ("sizeName")`);
        
        await queryRunner.query(`ALTER TABLE "orders" ADD "meatName" character varying`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "crustName" character varying`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "sizeName" character varying`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_7f23f5fcadfbb94fcc2d102aa3a"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_4c1f187ac9c6ca7575f0303e69a" FOREIGN KEY ("sauceName") REFERENCES "sauces"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_35d344a2b495981e5b3a0910adc" FOREIGN KEY ("meatName") REFERENCES "meats"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7172ea74547be37f06eb8140923" FOREIGN KEY ("crustName") REFERENCES "crusts"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_b4de6b778dcc7a224838cb679a0" FOREIGN KEY ("sizeName") REFERENCES "sizes"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_b4de6b778dcc7a224838cb679a0"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7172ea74547be37f06eb8140923"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_35d344a2b495981e5b3a0910adc"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_4c1f187ac9c6ca7575f0303e69a"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_7f23f5fcadfbb94fcc2d102aa3a" UNIQUE ("clientName")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_b4de6b778dcc7a224838cb679a0"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "sizeName"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_7172ea74547be37f06eb8140923"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "crustName"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_35d344a2b495981e5b3a0910adc"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "meatName"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_4c1f187ac9c6ca7575f0303e69a"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "sauceName"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "size" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "crust" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "meat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "sauce" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FKCrust" FOREIGN KEY ("crust") REFERENCES "crusts"("name") ON DELETE SET NULL ON UPDATE SET NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FKSize" FOREIGN KEY ("size") REFERENCES "sizes"("name") ON DELETE SET NULL ON UPDATE SET NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FKMeat" FOREIGN KEY ("meat") REFERENCES "meats"("name") ON DELETE SET NULL ON UPDATE SET NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FKSauce" FOREIGN KEY ("sauce") REFERENCES "sauces"("name") ON DELETE SET NULL ON UPDATE SET NULL`);
    }

}
