const express = require("express");
const app =express();

app.get("/",(req,res)=>{
    res.send("API is running");
});
app.get("/api/chat",(req,res)=>{
    res.send("API is running");
});
app.listen(3000,console.log("server is working on port 3000"))