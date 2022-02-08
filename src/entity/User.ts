import { Entity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Content } from './Content';

@Entity()
export class User extends Content { 
    @Column({type: "varchar", length: (130)})
    about: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}   