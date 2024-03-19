
const {createMailTransporter}=require("./createMailTransporter")

const sendVarificationMail=(user)=>{
    const transporter=createMailTransporter();

    const mailOption={
        from:'"mail application" <manishgga091@gmail.com>',
        to:user.email,
        subject:"verify your mail...",
        html:`<p>Hello 🙏 ${user.name},verify your email by clicking this link...</p>
        <a href='${process.env.CLIENT_URL}/verify-email?emailToken=${user.emailToken}'>
        verify your email.
        `,
    };
    transporter.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log("verification email sent ")
        }
    })
}
module.exports={sendVarificationMail}