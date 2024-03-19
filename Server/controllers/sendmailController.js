const nodemailer = require('nodemailer')
const Mail=require('../models/mail')
const sendEmail=async(req,res)=>{
    const  {from ,authPass,to,subject,text,userId}= req.body;

    
    
    const transporter = nodemailer.createTransport({
        service:"gmail",
        secure:true,
        logger:true,
        debug:true,
        secureConnection:false,
        auth:{
            user:from,
            pass:authPass
        },
        tls:{
            rejectUnauthorized:true
        }
    })

    //set up email data 
    const mailOption ={
        from:from,
        to:to,
        subject:subject,
        html:`<p>${text} this email is for only testing purpose</p>`
    }

    try {
        
        let info = await transporter.sendMail(mailOption);
        console.log("Message sent :%successfully",info.messageId)
        
        if(info){
            let newMail=new Mail({owner:userId.userId,...req.body})
            await newMail.save()
            if(newMail){

                console.log("email sent successfully and save",newMail)
                res.status(200).send("message sent and save successfully ")
            }else{
                console.log("not saved mail")
                res.status(400).send("something went wrong while saving the mail")
            }
        }
    } catch (error) {
        console.log(error)
        res.status( 500).send(`Error occured ${error}` )
    }

    
}

const getEmail=async(req,res)=>{
    const {from}=req.query;
    //console.log(from)
    try {
        
        const mails=await Mail.find({from:from});
         res.status(200).send(mails)
         console.log("reauest made")
         //res.status(200).send("request recieved")
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
const getSingleEmail=async(req,res)=>{
    const id=req.params;
    const emailId=id.id;
    console.log(emailId)
    try {
       const data=await Mail.findById({_id:emailId})
       console.log(data)
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(500).send("error occured during fetching the data")
    }
    
}
module.exports={sendEmail,getEmail,getSingleEmail}