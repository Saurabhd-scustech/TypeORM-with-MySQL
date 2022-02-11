import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Questions { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string

    @Column()
    title: string

    @ManyToMany(() => Category, categories => categories.questions)
    @JoinTable({
        name: "quetions and category",
        joinColumn: {
            name: "question",
            referencedColumnName: "id"
        },
        inverseJoinColumn:
        {
            name: "Category",
            referencedColumnName: "id"
        }
    })
    category: Category[]
}