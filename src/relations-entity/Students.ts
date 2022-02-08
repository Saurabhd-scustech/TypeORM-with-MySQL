import { PrimaryGeneratedColumn, Entity, Column, JoinColumn, OneToOne } from "typeorm";
import { College } from './College';

@Entity()
export class Student {
    @PrimaryGeneratedColumn({ type: "int" })
    id: string;

    @Column({ type: "varchar", length: 255, unique: true, nullable: false })
    name: string;

    @Column({type: "varchar", length: 255, nullable: false})
    age: number;

    @OneToOne(() => College)
    @JoinColumn({name: "CollegeID"})
    CollegeID: College;
}