const express=require('express')
const UserModel = require('../../models/UserModel/UserModel')
const route=express.Router()

route.post('/',async (req,res)=>{

    await UserModel.findByIdAndUpdate(req.body.userData.uid,req.body.userData)
    if(req.body.state==="follow"){
        const findFollowedUser=await UserModel.findById(req.body.FollowedId)
        findFollowedUser.followers.push(req.body.userData.uid)
        await UserModel.findByIdAndUpdate(req.body.FollowedId,findFollowedUser)
        res.json({success:true})
    }
    else{
        const findUnfollowedUser=await UserModel.findById(req.body.UnfollowedId)
        const index=findUnfollowedUser.followers.indexOf(req.body.userData.uid)
        findUnfollowedUser.followers.splice(index,1)
        await UserModel.findByIdAndUpdate(req.body.UnfollowedId,findUnfollowedUser)
        res.json({success:true})
    }
    
    
})

module.exports=route