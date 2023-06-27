import { Router } from "express";
import * as taskController from "../controller/task.controller"
const taskRouter = Router();


taskRouter.get('/task', taskController.getTask);
taskRouter.post('/task', taskController.createTask);


export default taskRouter;