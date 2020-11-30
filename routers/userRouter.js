import express from "express";
import routes from "../routes.js";
import { editProfile, userDetail, changePassword } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;