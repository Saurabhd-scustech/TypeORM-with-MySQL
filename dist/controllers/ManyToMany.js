"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyToManyOperations = void 0;
const typeorm_1 = require("typeorm");
const Ouestions_1 = require("../relations-entity/ManyToMany/Ouestions");
const Category_1 = require("../relations-entity/ManyToMany/Category");
const ManyToManyOperations = async (req, res, next) => {
    const cRepo = (0, typeorm_1.getRepository)(Category_1.Category);
    const qRepo = (0, typeorm_1.getRepository)(Ouestions_1.Questions);
    const categories1 = new Category_1.Category();
    categories1.category = "test category 1";
    await cRepo.save(categories1);
    // categories1.questions = []
    const categories2 = new Category_1.Category();
    categories2.category = "test category 2";
    await cRepo.save(categories2);
    const questions = new Ouestions_1.Questions();
    questions.text = "Question number 1";
    questions.title = "Main Title";
    questions.category = [categories1, categories2];
    await qRepo.save(questions);
    // res.json({message: questions})
    console.log(req, next);
    const findRelation = await (0, typeorm_1.getRepository)(Ouestions_1.Questions).find({ relations: ['category'] });
    res.json({ "Many to Many Relations": findRelation });
};
exports.ManyToManyOperations = ManyToManyOperations;
