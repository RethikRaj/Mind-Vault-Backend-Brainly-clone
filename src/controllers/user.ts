import type { Request, Response} from 'express';
import { UserService } from '../services/user.js';

interface SignUpBody{
    email : string,
    username : string,
    password : string
}

interface SignInBody{
    email : string,
    password : string
}

export class UserController{
    static async createUser(req : Request, res : Response){
        try {
            // TODO : zod validation
            const {email, username, password} : SignUpBody = req.body;
            const user = await UserService.createUser(email, username, password);
            return res.status(201).json({
                message : 'User created successfully',
                data : user
            });
        } catch (error) {
            // console.log(error);
            res.status(500).json({message : error});
        }
    }

    static async signIn(req : Request, res : Response){
        try {
            console.log("Hello", req.body);
            // TODO : zod validation
            const {email, password} : SignInBody = req.body;
            const token = await UserService.signin(email, password);
            return res.status(200).json({
                data : token
            });
        } catch (error) {
            // console.log(error);
            res.status(500).json({message : error});
        }
    }
}