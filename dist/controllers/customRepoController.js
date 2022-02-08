"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUsername = exports.customRepo = void 0;
const typeorm_1 = require("typeorm");
const custom_repository_1 = require("../repositories/custom_repository");
const customRepo = async (req, res, next) => {
    const userRepo = (0, typeorm_1.getCustomRepository)(custom_repository_1.UserRepository);
    const user = await userRepo.customSave(req.body.name, req.body.age, req.body.about);
    res.json({ success: user });
    console.log(next);
};
exports.customRepo = customRepo;
const findUsername = async (req, res, next) => {
    const { username } = req.body;
    const user = await (0, typeorm_1.getCustomRepository)(custom_repository_1.UserRepository).findUserByUsername(username);
    res.json({ Found: "Requested username", user });
    console.log(next);
};
exports.findUsername = findUsername;
