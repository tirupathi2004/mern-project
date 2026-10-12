import React,{useEffect, useState}  from 'react'

const Contactform = ({onsubmit,existing}) => {
    const [name,setname]=useState("");
    const [phone,setphone]=useState("");
    const [email,setemail]=useState("");
    useEffect(()=>{
      if(existing){
        setname(existing.name)
        setphone(existing.phone)
        setemail(existing.email)
      }
    },[existing])
    const handlesubmit=(e)=>{
        e.preventDefault();
        onsubmit({name,phone,email});
        setname("");
        setemail("");
        setphone("");
    }
  return (
    
      <form onSubmit={handlesubmit}>
        <input 
        type="text" 
        value={name} 
        required 
        placeholder='enter name' 
        onChange={(e)=>setname(e.target.value)}/>
        <input 
        type="text" 
        value={phone} 
        required 
        placeholder='enter phone number' 
        onChange={(e)=>setphone(e.target.value)}/>
        <input 
        type="email" 
        value={email} 
        required 
        placeholder='enter email' 
        onChange={(e)=>setemail(e.target.value)}/>
        <button type="submit">{existing ? "update" : "add"}</button>
      </form>
   
  )
}

export default Contactform

