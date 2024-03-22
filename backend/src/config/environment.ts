import dotenv from 'dotenv'
dotenv.config()

export const environment = {
    JWT_TOKEN_SECRET_KEY: process.env.JWT_TOKEN_SECRET_KEY as string,
    MONGO_URI: process.env.MONGO_URI as string
}