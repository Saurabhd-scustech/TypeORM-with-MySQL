import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { Book } from "./entity.book";


@Entity()
export class Pages { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    page_number: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Book, books => books.pages)
    @JoinColumn({ name: "Book_ID" })
    book: Book;
        
    

}