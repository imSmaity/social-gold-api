const express=require('express')
const UserPost= require('../../models/post')
const route=express.Router()

route.post('/',async (req,res)=>{
    const commentData={
        comment: req.body.comment,
        commentUserName: req.body.commentUserName,
        commentUserUId: req.body.commentUserUId,
        commentUserAvatar: req.body.commentUserAvatar
    }
    
    let findPost=await UserPost.findById(req.body.postId).exec()
    await UserPost.findByIdAndUpdate(req.body.postId,{comments:[...findPost.comments,commentData]})
    const postData=await UserPost.findById(req.body.postId).exec()
    res.send(postData.comments)
})

module.exports=route