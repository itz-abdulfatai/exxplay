import mongoose, { mongo } from "mongoose";

import dotenv from 'dotenv'

dotenv.config()

async function connectDB () {
    if (mongoose.connection.readyState == 1) {
        console.log('using existing connection')
    } else {

        try {
            await  mongoose.connect(process.env.MONGO_URI)
            console.log('db connected')
            
        } catch (error) {
            console.error('something went wrong: ',error.message)
            return
            
        }
    } 
}

export default connectDB