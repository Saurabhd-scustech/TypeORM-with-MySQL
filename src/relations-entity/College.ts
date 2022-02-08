import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


export enum Type_Of_College{ 
    G = "GRANTED",
    NG = "NON_GRANTED"
}
@Entity()
export class College { 
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    college_name: string;

    @Column()
    college_location: string;

    @Column("enum", { enum: Type_Of_College })
    type: string;
}