import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Exclude } from "class-transformer";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  id: string;

  @Column()
  status: string;

  @Column()
  name: string;

  @Column()
  document: number;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;
}

export default Users;
