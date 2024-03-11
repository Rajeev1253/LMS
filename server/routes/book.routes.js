import express from "express";
import { IsAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { bookController } from "../controller/book.controller.js";

const router = express.Router();

router.post("/",requireSignIn,IsAdmin,bookController.addBook);
router.get("/",requireSignIn,IsAdmin,bookController.getBook)




export default router;