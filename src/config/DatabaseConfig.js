const mongoose=require('mongoose')
require('dotenv').config()

const URI=process.env.URI
const database=async ()=>{
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true})
    console.log("Database Connected...!");
}

module.exports=database