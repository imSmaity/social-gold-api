const express=require('express')
const route=express.Router()
const UserModel=require('../../models/UserModel/UserModel')

route.post('/', async (req,res)=>{
    const user={}
    const {_id,fname,lname,gender,email,dob,password}=req.body.userData
    user._id=_id
    user.fname=fname
    user.lname=lname
    user.gender=gender
    user.email=email
    user.dob=dob
    user.password=password
    user.avatar=`https://avatars.dicebear.com/api/${gender}/${_id}.svg`
    user.bio=''

    const doc=new UserModel(user)
    await doc.save()

    res.send({success:true})
})

module.exports=route
