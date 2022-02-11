"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyToOneOperation = void 0;
const entity_book_1 = require("../relations-entity/OneToMany/entity.book");
const entity_pages_1 = require("../relations-entity/OneToMany/entity.pages");
const typeorm_1 = require("typeorm");
const ManyToOneOperation = async (req, res, next) => {
    const bookManager = (0, typeorm_1.getRepository)(entity_book_1.Book);
    const pagesRepo = (0, typeorm_1.getRepository)(entity_pages_1.Pages);
    // ONE BOOK
    // MANY PAGES
    const p1 = new entity_pages_1.Pages();
    p1.page_number = 20;
    await pagesRepo.save(p1);
    const p2 = new entity_pages_1.Pages();
    p2.page_number = 30;
    await pagesRepo.save(p2);
    const p3 = new entity_pages_1.Pages();
    p3.page_number = 40;
    await pagesRepo.save(p3);
    const book = new entity_book_1.Book();
    book.book_name = "Rose Killed Us";
    book.book_author = "marvel";
    book.pages = [p1, p2, p3];
    const bookResult = await bookManager.save(book);
    // res.json({ "OneToMany Relation": bookResult })
    console.log(req, next, bookResult);
    const findRelation = await (0, typeorm_1.getRepository)(entity_pages_1.Pages).find({ relations: ['book'] });
    res.json({ message: "Many To One Relations", findRelation });
};
exports.ManyToOneOperation = ManyToOneOperation;
