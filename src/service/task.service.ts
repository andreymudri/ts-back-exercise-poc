import { tasktype } from "../protocols/index";
import * as taskRepository from "../repository/task.repository"


export function createTask(task: tasktype):void {
    return taskRepository.createTask(task)
}
export function getTask():Promise<tasktype[]> {
    return taskRepository.getTask();
}