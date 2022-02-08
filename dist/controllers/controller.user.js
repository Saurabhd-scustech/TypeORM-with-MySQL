"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const getData = (req, res, next) => {
    console.log(`Getting some response ${req} ${next}`);
    res.status(200).json({ message: 'OK' });
};
exports.getData = getData;
