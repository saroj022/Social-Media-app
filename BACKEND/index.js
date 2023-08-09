const express=require("express")
const {connection}=require("./configs/db")
const {userroutes}=require("./routes/user.route")
const {postroutes}=require("./routes/post.routes")
const {authenticate}=require("./middlewares/authenticate.middleware")
require('dotenv').config()
var cors = require('cors')


const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use("/users",userroutes)
app.use(authenticate)
app.use("/posts",postroutes)

app.get("/",(req,res)=>{
    res.send("Hello")
})



app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server start")
})