import dotenv from 'dotenv';

dotenv.config();

export const Config = {
    PORT : process.env.PORT ?? 3000,
    SALT_ROUNDS : process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10
}
