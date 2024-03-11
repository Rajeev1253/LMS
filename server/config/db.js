import mongoose from "mongoose";

export const connectDb=async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL
            
          );
          console.log(`connected with database successfully ${conn.connection.host}`);
        } 
    catch(error)
    {
        console.log(error)
    }
}