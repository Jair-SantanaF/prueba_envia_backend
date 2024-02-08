import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const API_KEY = process.env.API_KEY || '';
export const API_URL = 'https://api-test.envia.com/ship/generate';