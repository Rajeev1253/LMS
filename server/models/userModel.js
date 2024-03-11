import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["User","Admin"],
        default:"User"
    },
     books: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "books",
            },
          ],

    
})

export const userModel= mongoose.model("users",userSchema)