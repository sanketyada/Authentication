import mongoose from "mongoose";
import config from "./config.js";

const dbConnection =async ()=>{
    try {
        const conn = await mongoose.connect(config.MONGODB_URI)
        console.log(`Database Connected:${conn.connection.host}`)
    } catch (error) {
        console.log(`Unable to Connect wit DB ${error.message}`)
    }
}
export default dbConnection;