const mongoose=require('mongoose')
const {Schema}=mongoose

const userDataStructure={
    _id: String,
    fname: String,
    lname: String,
    gender: String,
    email: String,
    dob: String,
    password: String,
    avatar:String,
    bio: String,
    posts: Array,
    following: Array,
    followers: Array
}
const userSchema=new Schema(userDataStructure)

const UserModel=new mongoose.model("user",userSchema)
module.exports=UserModel