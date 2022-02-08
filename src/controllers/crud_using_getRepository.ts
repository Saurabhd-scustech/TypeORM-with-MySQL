import { RequestHandler } from "express";
// import { UserSchema } from '../models/model.user';
import { getRepository } from "typeorm";
import {User} from '../entity/User'


// createPost 
export const createUser: RequestHandler = async(req, res, next) => {
    const { name, age, about } = req.body;
    const newUser = new User();
    newUser.name = name;
    newUser.age = age;
    newUser.about = about;  

    const userRepo = getRepository(User);
    // const err_name = await userRepo.find({ name: IsNull() }) 
        console.log("name should not be empty...!")
        res.json({ warning: "Please provide name" })
     
        const result = await userRepo.insert(newUser);
        res.json({ message: result })

    console.log(next)
} 


// findUsers
export const findUsers: RequestHandler = async (req, res, next) => { 
    const userRepo = getRepository(User);
    const result = await userRepo.find();
    res.json({ messgae: result })
    console.log(next, req)
}

// update user
export const updateUser: RequestHandler = async(req, res, next) => {
    const { name, age, about } = req.body;
    const uid = req.params.id;  
    const userRepo = getRepository(User);
    const result = await userRepo.update(uid, { name, age, about })
    res.json({message: "updating user", result});
    console.log(next)
}

export const deleteUser: RequestHandler = async (req, res, next) => {
    const uid = Number(req.params.id)
    const userRepo = getRepository(User);
    const result = await userRepo.delete(uid)
    if (result) { 
        res.json({messgae: result})
    }
    console.log(next);
}

// Using SELECT fetching specific table data. 
export const find_name_id: RequestHandler= async(req, res, next) => {
    const userRepo = getRepository(User);
    const result = await userRepo.find({ select: ['name', "about"] });
    res.json({ Found: result })
    console.log(req, next);
}


// Using WHERE geting conditional data 
export const whereQuery: RequestHandler = async (req, res, next) => {
    const userRepo = getRepository(User);
    const getUser = await userRepo.find({
        where: {"name": "Dinesh Chandak"}
    })
    res.json({ found: getUser })
    console.log(req, res, next)
}

// Getting data By Orders
export const getDesc: RequestHandler = async (req, res, next) => {
    const userRepo = getRepository(User);
    const result = await userRepo.find({
        order: {
            name: "ASC"
        }
    })
    res.json({ message: "Descending orders", result })
    console.log(req, next)
} 


// Filtering users by using SKIP and TAKE
export const skipUser: RequestHandler = async(req, res, next) => {
    const userRepo = getRepository(User);
    const result = await userRepo.find({
        order: {                      //By default it mapping to ID table
            name: "ASC"
        },
        skip: 1,
        take: 2
    })
    res.json({ message: "Skiping user", result })
    console.log(req, next)
}