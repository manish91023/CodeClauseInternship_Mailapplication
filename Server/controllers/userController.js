const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel= require('../models/user')
const validator = require("validator");
const { sendVarificationMail } = require("../utils/sendVarificationMail");
const crypto=require("crypto")

const createToken=(_id)=>{
    const jwtSecretKey=process.env.JWT_SECRET_KEY;
    return jwt.sign({_id},jwtSecretKey,{expiresIn:600})
}

const registerUser=async(req,res)=>{
    const {name,email,cnfpassword,password,dob}=req.body;
    try {
       let user=await userModel.findOne({email})
       if(user){return res.status(400).send("user already exists...")}

       if(password!=cnfpassword) return res.status(400).send("password is incorrect");

       user= new userModel({name,email,dob,password,emailToken:crypto.randomBytes(8).toString('hex')});

       if(!name || !email || !password || !cnfpassword || !dob) return res.status(400).send("All fields are required")

       if(!validator.isEmail(email)) return res.status(400).send("email should be vaild...");

       const salt =10;
       const hashPass=await bcrypt.hash(password,salt);

       user.password=hashPass;
       await user.save();
       sendVarificationMail(user)

       const token = createToken(user._id)
       res.status(200).send({_id:user._id,email,name,token})
        
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

const verifiedUserLink =async(req,res)=>{
    const emailToken=req.query.emailToken;
    console.log(emailToken)
    try {
         // Correctly format the findOneAndUpdate call
         const user = await userModel.findOneAndUpdate(
            { emailToken: emailToken }, // Find a document with the matching emailToken
            { $set: { isVarified: true } }, // Update the isVerified field to true
            { new: true } // Return the updated document
        );

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Assuming you want to send a response back to the client
        res.status(200).send({ message: "Email verified successfully" ,user});
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    } 
  
}

//login logic will be here
const Login=async(req,res)=>{
    const{email,password}=req.body;
    try {
        if(!email || !password) return res.status(500).send("fill all the fields")
        const user=await userModel.findOne({email:email});
        if(!user)return res.status(401).send('Invalid Email or Password');
        let verifiedPass=await bcrypt.compare(password,user.password);
        if(!verifiedPass)return res.status(401).send('Invalid  Password');
        //if user verified email link or not here 
        if(!user.isVarified) return res.status(401).send("your not verified email go and check email box")
        //create and assign token
         let token=createToken(user._id);
       
         console.log(user)
         res.status(200).send({auth:true,user:user.email,name:user.name,token:token})
    } catch (error) {
        console.log(error)
        res.send(500).send("an error is occured while login try again?")
    }
}

module.exports={registerUser,verifiedUserLink,Login};



