import express from "express"
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import status from "http-status";


const app = express()

//to parse json data of requests
app.use(express.json())
//logger
app.use(morgan('dev')); 

app.use("/api/auth",authRouter)

export default app;