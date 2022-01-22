const express=require('express')
const app=express()
const database=require('../config/DatabaseConfig')
const cors=require('cors')
const parser=require('body-parser')

app.use(cors())
app.use(parser.json())
app.use('/signup',require('../middlewares/user/UserSignUp'))
app.use('/search_user',require('../middlewares/user/search_user'))
app.use('/users',require('../middlewares/user/sym_users'))
app.use('/user_update',require('../middlewares/user/user_update'))



const PORT=9000
app.listen(PORT,()=>{
    console.log("Server are started in port "+PORT)
    database()
})