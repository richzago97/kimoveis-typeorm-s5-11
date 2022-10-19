import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Propertie } from "./properties.entity";

@Entity("adresses")
export class Adress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column()
  zipCode: string;

  @Column()
  number?: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToOne(() => Propertie)
  @JoinColumn()
  address: Adress;
}
