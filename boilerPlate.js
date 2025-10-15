const express = require("express");
const app = express();
let users = [
  {
    id: 1,
    name: "boogieman",
    email: "xyz@xyz.com",
  },
  {
    id: 2,
    name: "sethrollins",
    email: "seth@xyz.com",
  },
  {
    id: 3,
    name: "goldberg",
    email: "gold@xyz.com",
  },
];

// creat the apis
// get all the users
app.get("/users",(req,res)=>{
})

//add a new user
app.post("/users",(req,res)=>{
})

//updating a existing user
app.put("/users/:id",(req,res)=>{
})

//delete an existing user
app.delete("/users/:id",(req,res)=>{
})






