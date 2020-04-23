import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm/browser";

@Entity("list")
export class List extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    name!: string;
}
