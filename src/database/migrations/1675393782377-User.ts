import { MigrationInterface, QueryRunner } from "typeorm";

export class User1675393782377 implements MigrationInterface {
    name = 'User1675393782377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "birth" date NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(500) NOT NULL, "is_superuser" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
