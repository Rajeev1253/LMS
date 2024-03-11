import { errorHandler } from "../lib/utils.js";
import { bookService } from "../service/book.service.js";

const addBook = async(req,res)=>{
    try {
      console.log(req.body)
        const response = await bookService.addBook(req);
    
        return res.status(201).send({
          success: true,
          message: "Book added successfully",
          user: response,
        });
      } catch (error) {
        errorHandler(res, error);
      }
}
const getBook = async(req,res)=>{
  try {
    console.log(req.body)
      const response = await bookService.fetchBooks(req);
  
      return res.status(201).send({
        success: true,
        message: "Book fetched successfully",
        user: response,
      });
    } catch (error) {
      errorHandler(res, error);
    }
}
export const bookController = {
    addBook,
    getBook
}