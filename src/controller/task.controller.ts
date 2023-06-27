import { Request, Response } from "express"
import * as taskService from "../service/task.service"
import { tasktype } from "protocols"
import httpStatus from "http-status";

export function createTask(req: Request, res: Response) {
    const task = req.body as tasktype;
    taskService.createTask(task);
    res.sendStatus(httpStatus.CREATED);
}

export async function getTask(req: Request, res: Response) {

    const tasks = await taskService.getTask();
    res.send(tasks)
}