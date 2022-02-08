import { RequestHandler } from "express";
import { User } from "../entity/User";
import { getManager } from "typeorm";


// Inserting data to the database;
export const userPost: RequestHandler = async(req, res, next) => {
    const userManager = getManager();
    const { name, age, about } = req.body;
    const data = await userManager.insert(User, {name, age, about})
    console.log(`Getting some response ${req} ${next}`)    
    res.status(200).json({ message: 'OK', data });
}



//Getting all data from database
export const getAll: RequestHandler = async (req, res, next) => {
    const findData = getManager();
    const getData = await findData.find(User);
    res.status(302).json({ message: getData })
    console.log(`Getting some response ${req} ${next}`)    
}
export const updateUser: RequestHandler = async (req, res, next) => {
    const uid = req.params.id;
    const userManager = getManager();
    const { name, age, about } = req.body;
    if (name) {
        try {
            const user_name = await userManager.update(User, uid, { name });
            res.json({ message: "name updated", user_name })
        } catch (error) {
            res.json({ message: error })
        }
    }

    if (age) {
        try {
            const user_age = await userManager.update(User, uid, { age })
            res.json({ messgae: "age updated", user_age })
        } catch (error) {
          
            res.json({ message: error })
        }
    }
    if (about) {
        try {
            const user_about = await userManager.update(User, uid, { about })
            res.json({ messgae: "age updated", user_about })
        } catch (error) {
            res.json({ message: error })
        }
    }
    console.log(req, next)
}

export const deleteUser: RequestHandler = async (req, res) => {
    let uid = Number(req.params.id);
    const deleteManager = getManager();
    const findIndexOfUser = await deleteManager.find(User)
    const findUser = findIndexOfUser.find((user: User) => {
        console.log(`find me`,user, findUser);
    })
    if (uid == Number(findUser)) {
        res.json({message: "user not found"})
    }
    else { 
        const result = await deleteManager.delete(User, uid);
        res.json({message: "user deleted", result})
    }
}


// export const UserfindById: RequestHandler = async (req, res) => {
//     const uid = req.params.id;
//     const findByIdManager = getManager();
//     const found_user = await findByIdManager.findOne(uid);
//     if (found_user !== undefined) {
//         res.json({message: ""})
//     }
// }