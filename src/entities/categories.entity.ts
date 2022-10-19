import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Propertie } from "./properties.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Propertie, (properties) => properties.category)
  properties: Propertie[];
}
