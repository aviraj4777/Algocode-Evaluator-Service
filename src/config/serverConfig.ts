import dotenv from 'dotenv';

dotenv.config();

interface Config {
    PORT: number;
    REDIS_HOST: string;
    REDIS_PORT: number;
}

const config: Config = {
    PORT: Number(process.env.PORT) || 3000,
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
};

export default config;