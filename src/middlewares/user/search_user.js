const express=require('express')
const UserModel = require('../../models/UserModel/UserModel')
const route=express.Router()

route.post('/',async (req,res)=>{
    const findUser=await UserModel.findById(req.body.uid).exec()
    res.send(findUser)
})

module.exports=route