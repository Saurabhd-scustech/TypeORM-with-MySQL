import { RequestHandler } from "express";
import { getCustomRepository } from "typeorm"; 
import { UserRepository } from '../repositories/custom_repository'


export const customRepo: RequestHandler = async (req, res, next) => {
    const userRepo = getCustomRepository(UserRepository);
    const user = await userRepo.customSave(req.body.name, req.body.age, req.body.about);
    res.json({ success: user })
    console.log(next)
}

export const findUsername: RequestHandler = async (req, res, next) => {
    const { username } = req.body;
    const user = await getCustomRepository(UserRepository).findUserByUsername(username);
    res.json({ Found: "Requested username", user })
    console.log(next);
}

