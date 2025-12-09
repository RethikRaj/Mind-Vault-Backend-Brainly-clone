import { prisma } from "../lib/prisma.js";

export class UserRepository{
    async findAllUsers(){
        const users = await prisma.user.findMany(); 
    }

    async createUser(email : string, username : string, password : string){
        const user = await prisma.user.create({
            data : {
                email : email,
                username : username,
                password : password
            }
        })
        return user;
    }
}