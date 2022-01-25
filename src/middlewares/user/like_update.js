const express=require('express')
const UserPost= require('../../models/post')
const route=express.Router()

route.post('/',async (req,res)=>{
    const likeData={
        likesUserName: req.body.likesUserName,
        likesUserUId: req.body.likesUserUId,
        likesUserAvatar: req.body.likesUserAvatar
    }
    
    let findPost=await UserPost.findById(req.body.postId).exec()
    await UserPost.findByIdAndUpdate(req.body.postId,{likes:[...findPost.likes,likeData]})
    const postData=await UserPost.findById(req.body.postId).exec()
    res.send(postData.likes)
})

module.exports=route