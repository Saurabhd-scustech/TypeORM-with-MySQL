import { RequestHandler } from "express";
import { getManager, getRepository } from "typeorm";
import { Student } from "../relations-entity/OneToOne/Students";
import { College } from "../relations-entity/OneToOne/College";
import { Type_Of_College } from "../relations-entity/OneToOne/College";


export const create_OneToOneStudent: RequestHandler = async(req, res, next) => { 
    const entityManager = getManager();
    const student = new Student();
    const college = new College();
    
    college.college_name = "SGBAU Amravati college";
    college.college_location = "Amravati";
    college.type =Type_Of_College.G;

    student.name = "Saurabh Duryodhan";
    student.age = 12;
    student.college = college;
    const saveCollege = await entityManager.save(college)
    const saveStudent = await entityManager.save(student)
    console.log(req, next, saveCollege);
    // res.json({ college: saveCollege, student: saveStudent });
    console.log(saveStudent)
    const Repo = getRepository(Student)
    const findRelation = await Repo.find({ relations: ['college'] })
    res.json({message: "Found Some relations here", findRelation})
}
