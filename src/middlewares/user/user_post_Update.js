const express=require('express')
const UserModel = require('../../models/UserModel/UserModel')
const UserPost= require('../../models/post')
const route=express.Router()

route.post('/',async (req,res)=>{
    const posts=await UserPost.find({})
    const findPreviousId=posts[posts.length-1]._id
    const post={
        _id:findPreviousId+1,
        post:req.body.post,
        uploderUId: req.body.UID,
        uploderName:req.body.uploderName,
        uploderAvatar:req.body.uploderAvatar,
        timeDate: new Date().toISOString(),
        likes: [],
        comments:[]
    }
    
    const doc=new UserPost(post)
    await doc.save()
    
    const user=await UserModel.findById(req.body.UID).exec()
    user.posts.push(doc._id)
    await UserModel.findByIdAndUpdate(req.body.UID,user)

    res.send(user)
})

module.exports=route