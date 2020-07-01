import * as dotenv from 'dotenv';

dotenv.config();

// Databse
export const DATABASE_URL: string = process.env.DATABASE_URL as string;
export const DATABASE_NAME: string = process.env.DATABASE_NAME as string;
export const DATABASE_COLLECTION: string = process.env.DATABASE_COLLECTION as string;
