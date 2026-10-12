const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const connectdb=require("./config/db")
const Contact=require("./contact");
const app=express();
connectdb();
app.use(cors());
app.use(express.json());
//create contact
app.post("/api/contact",async(req,res)=>{
    const contact=await Contact.create(req.body)
    res.send(contact)
})
//get all contacts
app.get("/api/contact",async(req,res)=>{
    const contacts=await Contact.find();
    res.send(contacts)
})
//update contact
app.put("/api/contact/:id",async(req,res)=>{
    const contact=await Contact.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.send(contact);
})
//delete contact
app.delete("/api/contact/:id",async(req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.send({message:"deleted successfully"});
})
app.listen(5000,()=>{
    console.log("server running successfully");
})