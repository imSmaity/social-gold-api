const mongoose=require('mongoose')
const {Schema}=mongoose

const postDataStructure={
    _id: Number,
    post: String,
    uploderUId: String,
    uploderName: String,
    uploderAvatar: String,
    timeDate: String,
    likes: Array,
    comments: Array
}
const postSchema=new Schema(postDataStructure)

const PostModel=new mongoose.model("post",postSchema)
module.exports=PostModel