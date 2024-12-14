import dotenv from 'dotenv';
import Config from '../types/connectionInterface';

dotenv.config();

const config: Config = {
    PORT: Number(process.env.PORT) || 3000,
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
};

export default config;