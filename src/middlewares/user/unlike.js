const express=require('express')
const UserPost= require('../../models/post')
const route=express.Router()

function getLikedIndex(likes,uid){
    let index=-1
    for(let i=0;i<likes.length;i++){
        if(likes[i].likesUserUId===uid){
            index=i
            i=likes.length
        }
    }
    return index
}

route.post('/',async (req,res)=>{

    let index=getLikedIndex(req.body.likes,req.body.likesUserUId)
    
    let findPost=await UserPost.findById(req.body.postId).exec()
    findPost.likes.splice(index,1)
    await UserPost.findByIdAndUpdate(req.body.postId,findPost)

    res.send('')
})

module.exports=route