const mongoose = require('mongoose')
const connectdb= async()=>{
    try{
      await mongoose.connect("mongodb://localhost:27017/mern-project")
      console.log("mongodb connected")
    }catch(err){
        console.log("mongodb not connected",err);
    }
};
module.exports=connectdb;