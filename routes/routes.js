import express from "express";
import { contactUserController, homeController} from "../controllers/homeController.js";
const routes = express.Router();

routes.get("/",homeController)
routes.post("/",contactUserController);

export default routes;
