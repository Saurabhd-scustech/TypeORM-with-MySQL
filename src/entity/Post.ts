import { Column, Entity } from 'typeorm';
import { Concrete } from './Concrete';


@Entity()
export class Post extends Concrete { 
    @Column()
    viewcount: number;
}