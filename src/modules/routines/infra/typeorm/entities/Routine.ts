import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("routines")
class Routine {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @Column()
  every: string;

  @Column()
  run: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Routine;
