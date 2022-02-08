import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Book } from "./entity.book";


@Entity()
export class Pages { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    page_number: number;

    @Column()
    page_text: string;

    @Column()
    book_id: number;

    @ManyToOne(() => Book, book => book.pages)
    book: Book;

}