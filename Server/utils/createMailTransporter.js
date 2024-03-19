
const nodemailer= require("nodemailer")


const createMailTransporter=()=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        port:465,
        secure:true,
        logger:true,
        debug:true,
        secureConnection:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.AuthPass
        },
        tls:{
            rejectUnauthorized:true
        }
    })
    return transporter;
 
}

module.exports={createMailTransporter}