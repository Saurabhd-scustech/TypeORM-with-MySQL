import { RequestHandler } from "express";
import { getManager } from "typeorm";
import { Student } from "../relations-entity/Students";
import { College } from "../relations-entity/College";
import { Type_Of_College } from "../relations-entity/College";


export const create_OneToOneStudent: RequestHandler = async(req, res, next) => { 
    const entityManager = getManager();
    const student = new Student();
    const college = new College();
    
    college.college_name = req.body.college_name;
    college.college_location = req.body.college_location;
    college.type =Type_Of_College.NG;

    student.name = req.body.name;
    student.age = req.body.age;
    student.CollegeID = college;
    const saveCollege = await entityManager.save(college)
    const saveStudent = await entityManager.save(student)
    console.log(req, next, saveCollege);
    res.json({ college: saveCollege, student: saveStudent});
}
