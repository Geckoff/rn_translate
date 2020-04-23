import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm/browser";

@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    firstName!: string;

    @Column({ nullable: false })
    lastName!: string;
}
