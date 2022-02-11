"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const crud_using_getRepository_1 = require("../controllers/crud_using_getRepository");
// import { userPost, getAll, updateUser, deleteUser } from '../controllers/crud_using_getManager'
const customRepoController_1 = require("../controllers/customRepoController");
const ManyToOne_1 = require("../controllers/ManyToOne");
const OneToMany_1 = require("../controllers/OneToMany");
const ManyToMany_1 = require("../controllers/ManyToMany");
const student_one_to_onerelationalController_1 = require("../controllers/student_one-to-onerelationalController");
router.post('/', crud_using_getRepository_1.createUser);
router.get('/descending', crud_using_getRepository_1.getDesc);
router.get('/skipuser', crud_using_getRepository_1.skipUser);
router.get('/where', crud_using_getRepository_1.whereQuery);
router.get('/specific', crud_using_getRepository_1.find_name_id);
router.get('/', crud_using_getRepository_1.findUsers);
router.patch('/:id', crud_using_getRepository_1.updateUser);
router.delete('/:id', crud_using_getRepository_1.deleteUser);
router.get('/findgetone', customRepoController_1.findUsername);
router.post('/customRepository', customRepoController_1.customRepo);
router.post('/gov', student_one_to_onerelationalController_1.create_OneToOneStudent);
// OneToMany Relationships
router.post("/manytoone", ManyToOne_1.ManyToOneOperation);
router.post("/onetomany", OneToMany_1.OneToManyOperation);
router.post('/manytomany', ManyToMany_1.ManyToManyOperations);
exports.default = router;
