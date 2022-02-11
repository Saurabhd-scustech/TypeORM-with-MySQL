import { Book } from "../relations-entity/OneToMany/entity.book";
import { Pages } from "../relations-entity/OneToMany/entity.pages";
import { RequestHandler } from "express";
import { getRepository } from "typeorm";

export const ManyToOneOperation: RequestHandler = async(req, res, next) => {
    const bookManager = getRepository(Book)
    const pagesRepo = getRepository(Pages);
    // ONE BOOK
    
    // MANY PAGES
    const p1 = new Pages();
    p1.page_number = 20;
    await pagesRepo.save(p1);
    
    const p2 = new Pages();
    p2.page_number = 30;
    await pagesRepo.save(p2);

    const p3 = new Pages();
    p3.page_number = 40;
    await pagesRepo.save(p3);
    
    const book = new Book();
    book.book_name = "Rose Killed Us";
    book.book_author = "marvel";
    book.pages = [p1, p2, p3]

    const bookResult = await bookManager.save(book)
    // res.json({ "OneToMany Relation": bookResult })
    console.log(req, next, bookResult)

    const findRelation = await getRepository(Pages).find({ relations: ['book'] })
    res.json({message: "Many To One Relations", findRelation})
}