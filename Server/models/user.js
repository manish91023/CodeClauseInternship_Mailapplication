const mongoose = require("mongoose")

const schema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    dob:{type:Date},
    password:{type:String,required:true},
    emailToken:{type:String},
    isVarified:{type:Boolean,default:false}
},
{timestamps:true},
)

module.exports=mongoose.model("user",schema);