const express = require("express");
const dotenv =require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors= require("cors");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");



const app =express();

 dotenv.config();
 connectDB();
 app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}))

 app.use("/api/user", userRoutes);



 
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
 

const PORT = process.env.PORT
app.listen(PORT,console.log(PORT))