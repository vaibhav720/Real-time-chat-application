const express = require("express");
const dotenv =require("dotenv");
const app =express();
 dotenv.config();
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