import { Config } from '../config/config.js';
import {UserRepository} from '../repository/user.js'
import bcrypt from 'bcrypt';
const userRepository = new UserRepository();

export class UserService{
    static async createUser(email : string, username : string, password : string){
        // Check if user email/username already exists -> Will be done automatically since unique constraint
        const hashedPassword = await bcrypt.hash(password, Config.SALT_ROUNDS);
        const user = await userRepository.createUser(email, username, hashedPassword);
        return user;
    }
}