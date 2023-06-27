import express,{json} from "express";
import httpStatus from "http-status";
import taskRouter from "./routers/task.routers";

const app = express();
app.use(json());

 app.get("/health", (req, res) => {
     console.log("Hello");
     res.sendStatus(httpStatus.OK)
 });

 app.use(taskRouter)
const port:number = 5000;

//TODO: POSTGRE DB

app.listen(port, ()=>console.log('server up'))
