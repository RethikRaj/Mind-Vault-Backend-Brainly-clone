import express from "express";
import type { Request, Response } from "express";
import { Config } from './config/config.js';

const app = express();

app.get("/", (req : Request, res: Response)=>{
    res.send("Hello World")
})

app.listen(Config.PORT, ()=>{
    console.log("Server Started successfully.")
})