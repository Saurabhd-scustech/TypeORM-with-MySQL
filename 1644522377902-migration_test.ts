import {Migration, MigrationInterface, QueryRunner} from "typeorm";

export class migrationTest1644522377902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `bids` INT NOT NULL AFTER `book`")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP `bids`")

    
}
