import express from "express";
import { createUser, getUserDetails } from "../controllers/user_controller.js";
const UserRouter = express.Router();

UserRouter.post('/add', createUser)
UserRouter.post('/details', getUserDetails)

export default UserRouter