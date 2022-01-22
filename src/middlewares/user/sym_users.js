const express=require('express')
const UserModel = require('../../models/UserModel/UserModel')
const route=express.Router()

route.get('/',async (req,res)=>{
    const users=await UserModel.find({})
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users, null, 3));
})

module.exports=route