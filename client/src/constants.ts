import * as dotenv from 'dotenv';

dotenv.config();

// // Database
// export const DB_USER: string = process.env.DB_USER as string;
// export const DB_NAME: string = process.env.DB_NAME as string;
// export const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
// export const DB_PORT: number = 5432;
// export const DB_HOST: string = process.env.DB_HOST as string;
// export const DB_SCHEMA_NAME: string = process.env.DB_SCHEMA_NAME as string;

// Firebase
export const REACT_APP_FIREBASE_KEY: string = process.env.REACT_APP_FIREBASE_KEY as string;
export const REACT_APP_FIREBASE_DOMAIN: string = process.env.REACT_APP_FIREBASE_DOMAIN as string;
export const REACT_APP_FIREBASE_DATABASE: string = process.env.REACT_APP_FIREBASE_DATABASE as string;
export const REACT_APP_FIREBASE_PROJECT_ID: string = process.env.REACT_APP_FIREBASE_PROJECT_ID as string;
export const REACT_APP_FIREBASE_STORAGE_BUCKET: string = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string;
export const REACT_APP_FIREBASE_SENDER_ID: string = process.env.REACT_APP_FIREBASE_SENDER_ID as string;
export const REACT_APP_FIREBASE_APP_ID: string = process.env.REACT_APP_FIREBASE_APP_ID as string;
export const REACT_APP_FIREBASE_MEASUREMENT_ID: string = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID as string;
