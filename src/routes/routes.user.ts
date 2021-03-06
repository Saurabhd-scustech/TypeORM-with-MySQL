import { Router } from 'express';
const router = Router();
import { createUser, findUsers, updateUser, deleteUser, find_name_id, whereQuery, getDesc, skipUser } from '../controllers/crud_using_getRepository';
// import { userPost, getAll, updateUser, deleteUser } from '../controllers/crud_using_getManager'
import { customRepo, findUsername } from '../controllers/customRepoController';
import { ManyToOneOperation } from '../controllers/ManyToOne';
import { OneToManyOperation } from '../controllers/OneToMany';
import { ManyToManyOperations } from '../controllers/ManyToMany';
import { create_OneToOneStudent} from '../controllers/student_one-to-onerelationalController'
router.post('/', createUser);
router.get('/descending', getDesc);
router.get('/skipuser', skipUser)
router.get('/where', whereQuery)
router.get('/specific', find_name_id)
router.get('/', findUsers);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


router.get('/findgetone', findUsername)
router.post('/customRepository', customRepo)


router.post('/gov', create_OneToOneStudent)


// OneToMany Relationships
router.post("/manytoone", ManyToOneOperation)
router.post("/onetomany", OneToManyOperation)


router.post('/manytomany', ManyToManyOperations);

export default router;