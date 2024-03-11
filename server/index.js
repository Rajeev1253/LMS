import express  from "express";
import dotenv from "dotenv"
import { connectDb } from "./config/db.js";
import routes from "./routes/index.js"
import cors from "cors"
dotenv.config();
const app = express();

//middleware
app.use(express.json())
app.use(cors())


//routes
app.use("/",routes)

//connect to database
connectDb();


const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on port no ${port}`)
})