const express=require('express')
const PostModel = require('../../models/post')
const UserModel = require('../../models/UserModel/UserModel')
const route=express.Router()

async function fetchPostsById(postsId){
    const sortPostsId=postsId.sort().reverse()
    let fetchPosts=[]
    for(let i=0;i<sortPostsId.length;i++){
        const findPost=await PostModel.findById(sortPostsId[i]).exec()
        fetchPosts=[...fetchPosts,findPost]
    }

    return fetchPosts
}


route.post('/',async (req,res)=>{
    let postsId=[]
    const findUser=await UserModel.findById(req.body.uid).exec()
    if(findUser!==null){
        postsId=[...postsId,...findUser.posts]
   
        res.send({...findUser._doc,postsData: await fetchPostsById(postsId)})
    }
    else{
        res.send(null)
    }
    
})

module.exports=route