const express=require("express");
const {userModel}=require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userroutes=express.Router()


userroutes.post("/register",async(req,res)=>{
    const {name,email,password,gender}=req.body
    try {
        bcrypt.hash(password, 6, async(err, hash)=> {
            if(err){
                console.log(err)
            }else{
                const user=userModel({name,email,password:hash,gender})
                await user.save()
                res.send("registered")
            }
        });
    } catch (error) {
        console.log(error)
    }

})

userroutes.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await userModel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){
                    const token = jwt.sign({ account: 'users' }, 'socialmedia');
                    res.send({"token":token})
                }else{
                    res.send("worng Password")
                }
            });
        }else{
            res.send("worng Email")
        }
    } catch (error) {
        console.log(error)
    }

})

module.exports={
    userroutes
}