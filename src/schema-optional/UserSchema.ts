import { EntitySchema } from "typeorm";
import { User } from '../entity/User';


export interface UserSchema {
    id: number,
    name: string,
    username: string,
    about: string,
}
export const userSchema = new EntitySchema<UserSchema>({
    name: `${User}`, columns: {
        id: {
            type: Number, 
            primary: true, 
            generated: true, 
        },

        name: {
            type: String,
            length: 50
        },

        username: {
            type: String,
            length: 20
        },

        about: {
            type: String
        }
    } 
})