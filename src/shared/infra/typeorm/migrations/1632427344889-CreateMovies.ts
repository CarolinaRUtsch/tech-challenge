import {
  MigrationInterface,
  QueryRunner,
  TableForeignKey,
  Table,
} from "typeorm";

export class CreateMovies1632427344889 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "favorite_movies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "title",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "imdbID",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "favourite",
            type: "boolean",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "favorite_movies",
      new TableForeignKey({
        name: "moviesId",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("favorite_movies", "moviesId");
    await queryRunner.dropTable("favorite_movies");
  }
}
