import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm/browser";

@Entity("setting")
export class Setting extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    name!: string;

    @Column({ type: "varchar", nullable: true })
    value!: string;
}
