import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user";

const router = Router();

/* ----------Get Users---------- */
router.get('/', getUsers)

/* ----------Get User---------- */
router.get('/:id', getUser)


/* ----------Create User---------- */
router.post('/', createUser)

/* ----------Create User---------- */
router.put('/:id', updateUser)

/* ----------Delete User---------- */
router.delete('/:id', deleteUser)


export default router;