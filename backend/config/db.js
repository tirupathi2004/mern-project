const mongoose = require('mongoose')
const connectdb= async()=>{
    try{
      await mongoose.connect(process.env.tiru)
      console.log("mongodb connected")
    }catch(err){
        console.log("mongodb not connected",err);
    }
};
module.exports=connectdb;