import { RequestHandler } from "express";
import { getRepository } from "typeorm";
import { Questions } from "../relations-entity/ManyToMany/Ouestions";
import { Category } from "../relations-entity/ManyToMany/Category";

export const ManyToManyOperations: RequestHandler = async(req, res, next) => {
    const cRepo = getRepository(Category);
    const qRepo = getRepository(Questions);
    

    const categories1 = new Category();
    categories1.category = "test category 1"
    await cRepo.save(categories1);
    // categories1.questions = []


    const categories2 = new Category();
    categories2.category = "test category 2";
    await cRepo.save(categories2);


    const questions = new Questions();
    questions.text = "Question number 1"
    questions.title = "Main Title";
    questions.category = [categories1, categories2]
    await qRepo.save(questions);
 

    // res.json({message: questions})
    console.log(req, next);

    const findRelation = await getRepository(Questions).find({relations: ['category']});
    res.json({ "Many to Many Relations": findRelation });
}   