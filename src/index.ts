import express from "express";
import type { Request, Response } from "express";
import { Config } from './config/config.js';
import {prisma} from './lib/prisma.js';
import apiRouter from './routers/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/ping", async (req : Request, res: Response)=>{
    res.send("Ping request succesful");

    const users = await prisma.user.findMany();
    console.log(users)
})

app.use('/api', apiRouter);

app.listen(Config.PORT, ()=>{
    console.log("Server Started successfully.")
})