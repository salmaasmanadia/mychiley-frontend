import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL

if(!MONGODB_URL) {
    console.error("Invalid environment variable: MONGODB_URL")
}

export const connectToMongoDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL)

        if(connection.readyState === 1){
            return Promise.resolve(true)
        }
    }catch{
        return Promise.reject(error)
    }
}