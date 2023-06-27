import { tasktype } from "../protocols/index";
import * as taskRepository from "../repository/task.repository"


export function createTask(task: tasktype) {
    return taskRepository.createTask(task)
}
export function getTask() {
    return taskRepository.getTask();
}