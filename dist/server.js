"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const routes_user_1 = __importDefault(require("./routes/routes.user"));
const Photos_1 = require("./entity/Photos");
const User_1 = require("./entity/User");
const Post_1 = require("./entity/Post");
const Content_1 = require("./entity/Content");
const Concrete_1 = require("./entity/Concrete");
const Students_1 = require("./relations-entity/Students");
const College_1 = require("./relations-entity/College");
dotenv_1.default.config();
const app = (0, express_1.default)();
const { PORT } = process.env;
//json middleware
app.use(express_1.default.json());
//router middleware
app.use('/users', routes_user_1.default);
app.use((err, req, res, next) => {
    console.log(next, req);
    res.json({ message: err.message });
});
(0, typeorm_1.createConnection)({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "Srdx@//97",
    "database": "mydb",
    "synchronize": true,
    "logging": true,
    "entities": [User_1.User, Content_1.Content, Photos_1.Photos, Post_1.Post, Concrete_1.Concrete, Students_1.Student, College_1.College],
}).then(() => console.log(`Connected to MySQL Database`)).catch((err) => console.log(err.message));
app.listen(PORT, () => console.log(`server up and running on port number: ${PORT}`));
