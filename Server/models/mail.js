const mongoose = require('mongoose')

const schema=mongoose.Schema({
    from: { type: String, required: true }, 
    to: { type: String, required: true }, 
    subject: {type:String},
    text: {type:String},
    owner:{type:mongoose.Schema.ObjectId,ref:'user'}, //this is the user who owns this email
    date:{type:Date,default: Date.now()}

})


module.exports=mongoose.model("sentMail",schema)