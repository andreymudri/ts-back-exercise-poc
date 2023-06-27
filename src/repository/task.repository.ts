import { db } from "../database/database";
import { tasktype } from "protocols";



export function createTask(task: tasktype) {
  try {
    const query = `
    INSERT INTO tasks (task, author, status) VALUES ($1,$2,$3);
    `
    db.query(query,[task.task,task.author,task.status])
  } catch (error) {
    console.error(error);
    throw new Error("Error creating task");
    
  }

}
export async function getTask() {
try {
  const result = await db.query(`SELECT * FROM tasks`)
  console.log(result.rows)
  return result.rows;
} catch (error) {
  console.log(error)
  throw new Error('getTaskRepo failed')
}
}



/* CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  author TEXT NOT NULL,
  status BOOLEAN NOT NULL
); */