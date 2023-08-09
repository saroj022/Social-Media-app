const mongoose=require("mongoose")
require('dotenv').config()

const connction=mongoose.connect(process.env.url)

module.exports={
    connction
}