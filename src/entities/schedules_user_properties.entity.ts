import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Propertie } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class Schedules_user_propertie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Propertie)
  @JoinColumn()
  properties: Propertie;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn()
  user: User;
}
