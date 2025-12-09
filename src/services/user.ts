import { Config } from '../config/config.js';
import {UserRepository} from '../repository/user.js'
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.js';
const userRepository = new UserRepository();

export class UserService{
    static async createUser(email : string, username : string, password : string){
        // Check if user email/username already exists -> Will be done automatically since unique constraint
        const hashedPassword = await bcrypt.hash(password, Config.SALT_ROUNDS);
        const user = await userRepository.createUser(email, username, hashedPassword);
        return user;
    }

    static async signin(email : string, password : string){
        const user = await userRepository.findUserByEmail(email);

        if(!user){
            throw new Error('Authentication failed');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch){
            throw new Error('Authentication failed');
        }

        const token = generateToken({email : email, userId : user.id});

        return token;
    }
}