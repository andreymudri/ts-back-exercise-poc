import { tasktype } from "../protocols/index";
import * as taskRepository from "../repository/task.repository"


export function createTask(task: tasktype):void {
    return taskRepository.createTask(task)
}
export function getTask():Promise<tasktype[]> {
    return taskRepository.getTask();
}
export function delTask(id: number) {
    if(id <=0)  throw new Error('id menor que zero')
    return taskRepository.delTask(id);

}