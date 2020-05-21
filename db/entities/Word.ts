import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from "typeorm/browser";
import { List } from "./List";
import { TranslationOption } from "@api/translate";

@Entity("word")
export class Word extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    word!: string;

    @Column({ type: "text" })
    primaryTranslationJson!: string; // {text: string; pos: string}

    get primaryTranslation(): TranslationOption {
        return this.primaryTranslationJson ? JSON.parse(this.primaryTranslationJson) : null;
    }

    set primaryTranslation(translation: TranslationOption) {
        this.primaryTranslationJson = JSON.stringify(translation);
    }

    @Column({ type: "text", nullable: true })
    secondaryTranslationsJson!: string; // {text: string; pos: string}[]

    get secondaryTranslations(): TranslationOption[] {
        return this.secondaryTranslationsJson ? JSON.parse(this.secondaryTranslationsJson) : null;
    }

    set secondaryTranslations(translations: TranslationOption[]) {
        this.secondaryTranslationsJson = JSON.stringify(translations);
    }

    @Column({ type: "varchar" })
    langFrom!: string;

    @Column({ type: "varchar" })
    langTo!: string;

    @Column({ type: "int", default: 0 })
    timesRan!: number;

    @Column({ type: "int", nullable: true })
    lastRan!: number;

    @Column({ type: "int", default: 0 })
    timesForgot!: number;

    @Column({ type: "int", nullable: true })
    lastForgot!: number;

    @Column({ type: "int", default: 0 })
    archived!: 0 | 1;

    @ManyToMany((type) => List)
    @JoinTable()
    lists!: List[];
}
