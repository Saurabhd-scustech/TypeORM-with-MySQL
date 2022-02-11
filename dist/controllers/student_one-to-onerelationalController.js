"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_OneToOneStudent = void 0;
const typeorm_1 = require("typeorm");
const Students_1 = require("../relations-entity/OneToOne/Students");
const College_1 = require("../relations-entity/OneToOne/College");
const College_2 = require("../relations-entity/OneToOne/College");
const create_OneToOneStudent = async (req, res, next) => {
    const entityManager = (0, typeorm_1.getManager)();
    const student = new Students_1.Student();
    const college = new College_1.College();
    college.college_name = "SGBAU Amravati college";
    college.college_location = "Amravati";
    college.type = College_2.Type_Of_College.G;
    student.name = "Saurabh Duryodhan";
    student.age = 12;
    student.college = college;
    const saveCollege = await entityManager.save(college);
    const saveStudent = await entityManager.save(student);
    console.log(req, next, saveCollege);
    // res.json({ college: saveCollege, student: saveStudent });
    console.log(saveStudent);
    const Repo = (0, typeorm_1.getRepository)(Students_1.Student);
    const findRelation = await Repo.find({ relations: ['college'] });
    res.json({ message: "Found Some relations here", findRelation });
};
exports.create_OneToOneStudent = create_OneToOneStudent;
