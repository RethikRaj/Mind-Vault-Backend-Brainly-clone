import { Config } from "../config/config.js";
import jwt from 'jsonwebtoken';

interface UserPayload{
    email: string,
    userId : number
}

export function generateToken(payload : UserPayload){
    const token = jwt.sign(payload, Config.JWT_SECRET_KEY);
    return token;
}

export function verifyToken(token : string){
    const decodedPayload = jwt.verify(token, Config.JWT_SECRET_KEY);

    if (typeof decodedPayload === "string"){
        throw new Error('Invalid token payload format');
    }

    return decodedPayload;
}