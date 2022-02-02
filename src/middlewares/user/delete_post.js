const express=require('express')
const UserPost= require('../../models/post')
const UserModel = require('../../models/UserModel/UserModel')
const route=express.Router()


route.post('/',async (req,res)=>{
    
    const findUser=await UserModel.findById(req.body.uid).exec()
    await UserPost.findByIdAndRemove(req.body.postId)
    const index=findUser.posts.indexOf(req.body.postId)
    findUser.posts.splice(index,1)
    await UserModel.findByIdAndUpdate(req.body.uid,findUser)

    res.send('')
})

module.exports=route