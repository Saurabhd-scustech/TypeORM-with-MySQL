"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAll = exports.userPost = void 0;
const User_1 = require("../entity/User");
const typeorm_1 = require("typeorm");
// Inserting data to the database;
const userPost = async (req, res, next) => {
    const userManager = (0, typeorm_1.getManager)();
    const { name, username, about } = req.body;
    const data = await userManager.insert(User_1.User, { name, username, about });
    console.log(`Getting some response ${req} ${next}`);
    res.status(200).json({ message: 'OK', data });
};
exports.userPost = userPost;
//Getting all data from database
const getAll = async (req, res, next) => {
    const findData = (0, typeorm_1.getManager)();
    const getData = await findData.find(User_1.User);
    res.status(302).json({ message: getData });
    console.log(`Getting some response ${req} ${next}`);
};
exports.getAll = getAll;
const updateUser = async (req, res, next) => {
    const uid = req.params.id;
    const userManager = (0, typeorm_1.getManager)();
    const { name, username, about } = req.body;
    if (name) {
        try {
            const user_name = await userManager.update(User_1.User, uid, { name });
            res.json({ message: "name updated", user_name });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    if (username) {
        try {
            const user_username = await userManager.update(User_1.User, uid, { username });
            res.json({ messgae: "username updated", user_username });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    if (about) {
        try {
            const user_about = await userManager.update(User_1.User, uid, { about });
            res.json({ messgae: "username updated", user_about });
        }
        catch (error) {
            res.json({ message: error });
        }
    }
    console.log(req, next);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    let uid = Number(req.params.id);
    const deleteManager = (0, typeorm_1.getManager)();
    const findIndexOfUser = await deleteManager.find(User_1.User);
    const findUser = findIndexOfUser.find((user) => {
        console.log(`find me`, user.id === uid);
    });
    if (uid == Number(findUser)) {
        res.json({ message: "user not found" });
    }
    else {
        const result = await deleteManager.delete(User_1.User, uid);
        res.json({ message: "user deleted", result });
    }
};
exports.deleteUser = deleteUser;
// export const UserfindById: RequestHandler = async (req, res) => {
//     const uid = req.params.id;
//     const findByIdManager = getManager();
//     const found_user = await findByIdManager.findOne(uid);
//     if (found_user !== undefined) {
//         res.json({message: ""})
//     }
// }
