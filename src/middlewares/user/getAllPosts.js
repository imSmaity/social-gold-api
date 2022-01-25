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
    postsId=[...postsId,...findUser.posts]
    for(let i=0;i<req.body.following.length;i++){
        const findUser=await UserModel.findById(req.body.following[i]).exec()
        postsId=[...postsId,...findUser.posts]
    }

    res.send(await fetchPostsById(postsId))
})

module.exports=route