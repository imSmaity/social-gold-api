const express=require('express')
const UserPost= require('../../models/post')
const route=express.Router()


route.post('/',async (req,res)=>{
    
    let findPost=await UserPost.findById(req.body.postId).exec()
    findPost.comments.splice(req.body.index,1)
    await UserPost.findByIdAndUpdate(req.body.postId,findPost)

    res.send('')
})

module.exports=route