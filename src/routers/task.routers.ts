import { Router } from "express";
import * as taskController from "../controller/task.controller"
import { taskCheck } from "../middlewares/task.middlewares";
import { taskTypeSchema } from "../schemas/task.schema";
const taskRouter = Router();


taskRouter.get('/task', taskController.getTask);
taskRouter.post('/task',taskCheck(taskTypeSchema), taskController.createTask);


export default taskRouter;