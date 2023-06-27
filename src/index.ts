import express,{json} from "express";
import httpStatus from "http-status";
import taskRouter from "routers/task.routers";

const app = express();
app.use(json());

 app.get("/health", (req, res) => {
     console.log("Hello");
     res.sendStatus(httpStatus.OK)
 });

 app.use(taskRouter)
const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, ()=>console.log('server up'))
