const express = require("express");
const dotenv =require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")




const app =express();

 dotenv.config();
 connectDB();
 app.use(express.json());


 app.use("/api/user", userRoutes);
app.get("/",(req,res)=>{
    res.send("API is running");
});
app.get("/api/chat",(req,res)=>{
    res.send("API is running");
});
app.get("/api/chat/:id",(req,res)=>{
    res.send("API is running");
});

const PORT = process.env.PORT
app.listen(PORT,console.log(PORT))