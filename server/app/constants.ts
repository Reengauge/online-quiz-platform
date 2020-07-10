import * as dotenv from 'dotenv';

dotenv.config();

// Database
export const DB_USER: string = process.env.DB_USER as string;
export const DB_NAME: string = process.env.DB_NAME as string;
export const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
export const DB_PORT: number = 5432;
export const DB_HOST: string = process.env.DB_HOST as string;
export const DB_SCHEMA_NAME: string = process.env.DB_SCHEMA_NAME as string;
