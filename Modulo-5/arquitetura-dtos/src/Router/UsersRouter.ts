import { UserController } from '../controller/UserController';
import {Router} from "express"

export const usersRouter = Router()

const userController = new UserController()

usersRouter.post("/signup", userController.signup)
usersRouter.post("/login", userController.login)

usersRouter.get("/", userController.getUsers)

usersRouter.delete("/:id", userController.deleteUser)
usersRouter.put("/:id", userController.editUser)