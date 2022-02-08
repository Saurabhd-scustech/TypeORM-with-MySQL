import { User } from '../entity/User';
import { EntityRepository, AbstractRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User>{ 
    customSave(name: string, age: number, about: string) {
         const user = new User();
         user.name = name;
         user.age = age;
        user.about = about;
        return this.repository.save(user)
    } 
 
    findUserByUsername(name: string) {
        const user = new User();
        user.name = name;
        return this.repository.findOne(user)
    }
}
