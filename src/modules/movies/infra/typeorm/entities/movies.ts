import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Exclude } from "class-transformer";

@Entity("favorite_movies")
class Favoritemovies {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  imdbID: string;

  @Column()
  favourite: Boolean;
  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default Favoritemovies;
