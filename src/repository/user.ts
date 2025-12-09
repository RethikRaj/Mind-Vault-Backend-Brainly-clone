import { prisma } from "../lib/prisma.js";

export class UserRepository{
    async findAllUsers(){
        const users = await prisma.user.findMany(); 
        return users;
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

    async findUserByEmail(email : string){
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        });

        return user;
    }
}