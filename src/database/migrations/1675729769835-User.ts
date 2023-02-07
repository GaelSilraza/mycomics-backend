import { MigrationInterface, QueryRunner } from "typeorm";

export class User1675729769835 implements MigrationInterface {
    name = 'User1675729769835'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "description" character varying(500) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genres" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "formats" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, CONSTRAINT "PK_e99e1793fec9a30a4b463b46869" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "serializations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(160) NOT NULL, "alias" character varying(160), "featured" boolean NOT NULL DEFAULT false, "is_visible" boolean NOT NULL DEFAULT false, "age_group" smallint NOT NULL, "synopsis" character varying(1500) NOT NULL, "cover_url" character varying(1500) NOT NULL, "background_wallpaper_url" character varying(1500), "status" character varying(10) NOT NULL, "start_date" date NOT NULL DEFAULT '"2023-02-07T00:29:34.025Z"', "end_date" date, "publisher_id" uuid NOT NULL, "format_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3385adf963636bba2706d58a44e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publishers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(160) NOT NULL, "alias" character varying(160) NOT NULL, "is_active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staffers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(160) NOT NULL, "role" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ca58c4d46994548a2193e2c8cf9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "serializations" ADD CONSTRAINT "FK_01e4b76737fd79752def97b2f6e" FOREIGN KEY ("publisher_id") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "serializations" ADD CONSTRAINT "FK_0363ae221be38444cbbd9b6debf" FOREIGN KEY ("format_id") REFERENCES "formats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "serializations" DROP CONSTRAINT "FK_0363ae221be38444cbbd9b6debf"`);
        await queryRunner.query(`ALTER TABLE "serializations" DROP CONSTRAINT "FK_01e4b76737fd79752def97b2f6e"`);
        await queryRunner.query(`DROP TABLE "staffers"`);
        await queryRunner.query(`DROP TABLE "publishers"`);
        await queryRunner.query(`DROP TABLE "serializations"`);
        await queryRunner.query(`DROP TABLE "formats"`);
        await queryRunner.query(`DROP TABLE "genres"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
