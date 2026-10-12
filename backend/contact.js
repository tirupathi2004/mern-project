const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
});
module.exports=mongoose.model('Contact',userschema)