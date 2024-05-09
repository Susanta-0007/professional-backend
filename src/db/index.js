import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; 

const connectDB=async()=>{

    try{
       const connectionInstance=  await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
       console.log(`MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log(`MONGODB CONNECTION ERROR : ${err}`);
        process.exit(1);
    }
}

export default connectDB;