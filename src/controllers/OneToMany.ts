import { RequestHandler } from 'express';
import { Pages } from '../relations-entity/OneToMany/entity.pages';
import { Book } from '../relations-entity/OneToMany/entity.book';
import { getManager } from 'typeorm';
export const OneToManyOperation: RequestHandler = async (req, res, next) => {
    // const book_repo = getRepository(Book);
    // const pages_repo = getRepository(Pages);

    const book = new Book();
    book.book_name = "Ninja Dragon"; //
    book.book_author = "ballX";

    // await book_repo.save(book);

    const page1 = new Pages();
    page1.page_number = 2;
    page1.book = book
    // await pages_repo.save(page1);


    const page2 = new Pages();
    page2.page_number = 2;
    page2.book = book;
    // await pages_repo.save(page2);

    const page3 = new Pages();
    page3.page_number = 3
    console.log(res, req, next)
    // res.json({ "message": "saving oneToMany" })
    
    // const data = await getManager()
    //     .getRepository(Book)
    //     .createQueryBuilder("book_query")
    //     .leftJoinAndSelect("book_query.pages", "pages", "pages.page_number=:p_number", {p_number: 20})
    //     .where("book_query.book_name=:b_name", { b_name: "Rose Killed Us" })
    //     .orWhere("book_query.book_author=:b_author", { b_author: "ballX" })
    //     .limit(3)
    //     .offset(2)
    //     // .orderBy("book_query.book_author")
    //     .getRawMany();
    // res.json({"query_select_using_getRepository": data})



    //Insert query
    // const data = await getManager()
    //     // .getRepository(Book)
    //     .createQueryBuilder()
    //     .insert()
    //     .into(Book)
    //     .values([{
    //         book_name: "City of Roses",
    //         book_author: "2Scratch"
    //     }])
    //     .execute();
    // res.json({ inserted: "inserted successfully...!", data });



    //Update Query

    // const update_query = await getManager()
    //     .createQueryBuilder()
    //     .update(Book)
    //     .set({ book_author: "CryptoProxy" })
    //     .where("id=:id", { id: 68 })
    //     .execute();

    // res.json({"success": "updated successfully", update_query})


    // Delete Query
    const delete_query = await getManager()
        .createQueryBuilder()
        .delete()
        .from(Book)
        .where("id=:id", { id: 16 })
        .execute();
    
    res.json({"success": "deleted successfully", delete_query})
    
    // const findRelation = await getRepository(Book).find({ relations: ["pages"] });
    // res.json({ "Relation of Pages with Book": findRelation });
}