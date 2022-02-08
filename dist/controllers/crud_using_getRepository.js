"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipUser = exports.getDesc = exports.whereQuery = exports.find_name_id = exports.deleteUser = exports.updateUser = exports.findUsers = exports.createUser = void 0;
// import { UserSchema } from '../models/model.user';
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
// createPost 
const createUser = async (req, res, next) => {
    const { name, age, about } = req.body;
    const newUser = new User_1.User();
    newUser.name = name;
    newUser.age = age;
    newUser.about = about;
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    // const err_name = await userRepo.find({ name: IsNull() }) 
    console.log("name should not be empty...!");
    res.json({ warning: "Please provide name" });
    const result = await userRepo.insert(newUser);
    res.json({ message: result });
    console.log(next);
};
exports.createUser = createUser;
// findUsers
const findUsers = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.find();
    res.json({ messgae: result });
    console.log(next, req);
};
exports.findUsers = findUsers;
// update user
const updateUser = async (req, res, next) => {
    const { name, age, about } = req.body;
    const uid = req.params.id;
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.update(uid, { name, age, about });
    res.json({ message: "updating user", result });
    console.log(next);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res, next) => {
    const uid = Number(req.params.id);
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.delete(uid);
    if (result) {
        res.json({ messgae: result });
    }
    console.log(next);
};
exports.deleteUser = deleteUser;
// Using SELECT fetching specific table data. 
const find_name_id = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.find({ select: ['name', "about"] });
    res.json({ Found: result });
    console.log(req, next);
};
exports.find_name_id = find_name_id;
// Using WHERE geting conditional data 
const whereQuery = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const getUser = await userRepo.find({
        where: { "name": "Dinesh Chandak" }
    });
    res.json({ found: getUser });
    console.log(req, res, next);
};
exports.whereQuery = whereQuery;
// Getting data By Orders
const getDesc = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.find({
        order: {
            name: "ASC"
        }
    });
    res.json({ message: "Descending orders", result });
    console.log(req, next);
};
exports.getDesc = getDesc;
// Filtering users by using SKIP and TAKE
const skipUser = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getRepository)(User_1.User);
    const result = await userRepo.find({
        order: {
            name: "ASC"
        },
        skip: 1,
        take: 2
    });
    res.json({ message: "Skiping user", result });
    console.log(req, next);
};
exports.skipUser = skipUser;
