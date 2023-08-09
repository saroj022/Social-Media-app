const express=require("express");
const {userModel}=require("../models/user.model")

const postroutes=express.Router()

postroutes.get("/",(req,res)=>{
    res.send("Hello")
})

postroutes.patch("/update",(req,res)=>{
    
})


module.exports={
    postroutes
}