import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    issuedTo:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }]

},{timestamps:true})

export const bookModel = mongoose.model("book",bookSchema)