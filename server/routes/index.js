import express from "express"
import authRoutes from "./auth.routes.js"
import bookRoutes  from "./book.routes.js"
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Linkedin");
  });
  
router.use("/auth",authRoutes)
router.use("/book",bookRoutes)
export default router