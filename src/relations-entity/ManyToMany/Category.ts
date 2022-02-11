import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Questions } from './Ouestions';
@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string

    @ManyToMany(() => Questions, questions => questions.category)
    questions: Questions[]
}