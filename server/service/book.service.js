import { bookModel } from "../models/bookModel.js";

const addBook = async(req)=>{
    try{
      console.log("req.body", req.body)
        const {title,author,genre,quantity}=req.body;
        if (!title) {
            throw Object.assign(new Error(), {
              name: "BAD_REQUEST",
              message: "title is required",
            });
          }
          if (!author) {
            throw Object.assign(new Error(), {
              name: "BAD_REQUEST",
              message: "title is required",
            });
          }
          if (!genre) {
            throw Object.assign(new Error(), {
              name: "BAD_REQUEST",
              message: "title is required",
            });
          }
          if (!quantity) {
            throw Object.assign(new Error(), {
              name: "BAD_REQUEST",
              message: "title is required",
            });
          }
          
    
        //  const existingBook = await bookModel.findOne({ title:title });
    
        //   if(existingBook){
        //     existingBook.quantity += quantity
        //   }
    
          const newBook = await bookModel.create({title,author,genre,quantity})
    
          return newBook

    }
    catch(error){
        console.log(error)
    }    
      
}
export const fetchBooks = async(req)=>{
  try{

    const res = await bookModel.find();
    return res

  }
  catch(error){
    console.log(error)
  }
}
export const bookService = {
    addBook,
    fetchBooks
}