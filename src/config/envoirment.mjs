import dotenv from 'dotenv'
dotenv.config()

export const PORT=process.env.PORT
export const DB_PORT= process.env.DB_PORT
export const POSTGRES_USER= process.env.POSTGRES_USER 
export const POSTGRES_PASSWORD= process.env.POSTGRES_PASSWORD 
export const POSTGRES_DB= process.env.POSTGRES_DB
export const EMAIL=process.env.EMAIL
export const Email_PASS=process.env.Email_PASS
export const ADMIN_EMAIL=process.env.ADMIN_EMAIL