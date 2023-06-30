import { db } from "../database/database";
import { tasktype } from "protocols";
import { taskCheck } from "../middlewares/task.middlewares";
import { QueryResult } from "pg";



export function createTask(task: tasktype):void {
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
export async function getTask(): Promise<tasktype[]> {
try {
  const result = await db.query(`SELECT * FROM tasks`)
  console.log(result.rows)
  return result.rows;
} catch (error) {
  console.log(error)
  throw new Error('getTaskRepo failed')
}
}

export async function delTask(id: number) {
  try {
    await db.query(`DELETE FROM tasks WHERE ID=$1`, [id]);
  } catch (error) {
    console.log(error);
    throw error;
  }  
}

export async function editTask(id:number):Promise<void>{
  try {
    const result:QueryResult<tasktype> = await db.query(`SELECT FROM tasks where ID=$1`, [id])
    const updatedTask: tasktype = result.rows[0];
    updatedTask.status = !updatedTask.status
    await db.query(`UPDATE tasks SET task = $1, author = $2, status = $3 WHERE id = $4`,
      [updatedTask.task, updatedTask.author, updatedTask.status, updatedTask.id]
    );

  } catch (error) {
    console.log(error);
    throw error;

  }
}


/* CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  author TEXT NOT NULL,
  status BOOLEAN NOT NULL
); */