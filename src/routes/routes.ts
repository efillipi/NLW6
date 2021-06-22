import { Router } from "express";
import CreateuserController from "../controllers/CreateuserController";

const router = Router();

const createUserController = new CreateuserController();

router.post("/users", createUserController.execute)


export default router;
