import { Request, Response } from "express"
import * as taskService from "../service/task.service"
import { tasktype } from "protocols"
import httpStatus from "http-status";

export function createTask(req: Request, res: Response) {
    const task = req.body as tasktype;
    taskService.createTask(task);
    res.sendStatus(httpStatus.CREATED);
}

export function getTask(req: Request, res: Response) {

    const tasks = taskService.getTask();
    res.send(tasks)
}