import { Entity, Column, TableInheritance, PrimaryGeneratedColumn } from "typeorm";


@Entity()   
@TableInheritance({ column: { type: "varchar", name: "concrete" } })
export abstract class Concrete { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;
}