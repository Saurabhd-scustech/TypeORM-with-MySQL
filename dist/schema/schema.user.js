"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
exports.userSchema = new typeorm_1.EntitySchema({
    name: `${User_1.User}`, columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String
        },
        username: {
            type: String
        },
        about: {
            type: String
        }
    }
});
