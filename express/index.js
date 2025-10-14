const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("hello i am express")
})

app.get("/about",(req,res)=>{
    res.send("i am about page")
})

app.listen(5000,()=>{
    console.log("app started")
});