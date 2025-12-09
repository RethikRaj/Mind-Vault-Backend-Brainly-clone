import express from "express";
import type { Request, Response } from "express";
import { Config } from './config/config.js';
import {prisma} from './lib/prisma.js';

const app = express();

app.get("/ping", async (req : Request, res: Response)=>{
    res.send("Ping request succesful");

    const users = await prisma.user.findMany();
    console.log(users)
})

app.listen(Config.PORT, ()=>{
    console.log("Server Started successfully.")
})