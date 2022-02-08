import { Column, ChildEntity } from "typeorm";
import { Concrete } from "./Concrete"; 

@ChildEntity()
export class Photos extends Concrete { 
    @Column()
    size: number;
}