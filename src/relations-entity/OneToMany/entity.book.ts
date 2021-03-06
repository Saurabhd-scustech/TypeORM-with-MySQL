import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from "typeorm";
import { Pages } from "./entity.pages";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    book_name: string;

    @Column()
    book_author: string;

    @OneToMany(() => Pages, pages => pages.book)
    @JoinColumn({name: "Pages_ID"})
    pages: Pages[];

}