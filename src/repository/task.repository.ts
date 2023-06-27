import { tasktype } from "protocols";

const tasks: tasktype[] = [
    {
      task: "Complete project report",
      author: "John Doe",
      status: true,
    },
    {
      task: "Prepare presentation slides",
      author: "Jane Smith",
      status: false,
    },
    {
      task: "Review code changes",
      author: "John Doe",
      status: true,
    },
    {
      task: "Schedule team meeting",
      author: "Sarah Johnson",
      status: false,
    },
    {
      task: "Test new software release",
      author: "Jane Smith",
      status: true,
    },
  ];
  



export function createTask(task:tasktype){
    return tasks.push(task);
}
export function getTask() {
    return tasks;
}