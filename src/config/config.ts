import dotenv from 'dotenv';

dotenv.config();

export const Config = {
    PORT : process.env.PORT ?? 3000,
    SALT_ROUNDS : process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY ?? '',
    JWT_TOKEN_EXPIRE_TIME : process.env.JWT_TOKEN_EXPIRE_TIME ?? '1h'
}
