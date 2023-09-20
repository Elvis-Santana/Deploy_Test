import  express from "express";
import UserController from '../controller/User';

const router = express.Router();

router.post('/User/Create',
UserController.CreateValidation ,
UserController.Create);

router.get('/',UserController.getAll)


export default router;