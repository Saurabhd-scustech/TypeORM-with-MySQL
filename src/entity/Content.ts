import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export abstract class Content { 
    @PrimaryGeneratedColumn()
    id: {
        primary: true,
        unique: true,
    }

    @Column({nullable: false})
    name: string
    
    @Column()
    age: number
}