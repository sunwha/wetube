import express from "express";
import routes from "../routes.js";
import { home, search } from "../controllers/videoController.js";
import { postJoin, getJoin, logout, getLogin, postLogin } from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;