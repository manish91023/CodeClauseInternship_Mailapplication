
require('dotenv').config();
const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors')
const session = require('express-session')
const mongoose = require("mongoose");
const {registerUser,verifiedUserLink,Login}=require("./controllers/userController");
const verifyToken= require('./middleware/autharization')
const {sendEmail,getEmail, getSingleEmail}=require('./controllers/sendmailController')


mongoose.connect(`${process.env.MONGO_URI}`)
.then(res=>{console.log("db connected")})
.catch(err=>{console.log("db not connectd",err)})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })) 
//ROUTES
  
  
app.post('/register',registerUser)

app.get('/verify-email',verifiedUserLink)
app.post('/login',Login)
app.get('/dashboard',verifyToken,(req,res)=>{
    res.json({message:"dashboard data"})
})
 
app.post('/send-email',sendEmail) 
app.get('/get-email',getEmail) 
app.get('/mail/:id',getSingleEmail) 

app.listen(PORT,(err)=>{
    if(!err){
        console.log(  `running at ${PORT}`)
    }
})