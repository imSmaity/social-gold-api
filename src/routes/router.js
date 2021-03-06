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
app.use('/follow_unfollow',require('../middlewares/user/follow_unfollow'))
app.use('/posting',require('../middlewares/user/user_post_Update'))
app.use('/all_posts',require('../middlewares/user/getAllPosts'))
app.use('/like_update',require('../middlewares/user/like_update'))
app.use('/comment_update',require('../middlewares/user/comment_update'))
app.use('/unlike',require('../middlewares/user/unlike'))
app.use('/delete_post',require('../middlewares/user/delete_post'))
app.use('/delete_comment',require('../middlewares/user/delete_comment'))



const PORT=9000
app.listen(PORT,()=>{
    console.log("Server are started in port "+PORT)
    database()
})