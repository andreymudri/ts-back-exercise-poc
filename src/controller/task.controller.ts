import { Request, Response } from "express"
import * as taskService from "../service/task.service"
import { tasktype } from "protocols"
import httpStatus from "http-status";

export function createTask(req: Request, res: Response):void {
    const task = req.body as tasktype;
    taskService.createTask(task);
    res.sendStatus(httpStatus.CREATED);
}

export async function getTask(req: Request, res: Response):Promise<any> {

    const tasks = await taskService.getTask();
    res.send(tasks)
}

export async function delTask(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await taskService.delTask(id);

    res.sendStatus(httpStatus.OK);
}

export async function editTask(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await taskService.editTask(id);
    res.sendStatus(httpStatus.OK);
}