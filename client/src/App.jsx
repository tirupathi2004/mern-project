import React, { useEffect, useState } from 'react'

import API from './api'
import Contactform from './Contactform'
import Contactlist from './Contactlist'
import "./App.css"
const App = () => {
  const [contacts,setcontacts]=useState([])
  const [editcontact,seteditcontact]=useState(null)
  console.log(editcontact);
  //contact fetching
  const fetchcontacts=async ()=>{
    const res=await API.get("/")
    setcontacts(res.data);
  }
  useEffect(()=>{
     fetchcontacts();
  },[])
  //add new contact 
  const addcontact=async(data)=>{
    await API.post("/",data);
    console.log("sent successfully");
    fetchcontacts();
  }
  //updating contact
  const updatecontact=async(data)=>{
    await API.put(`/${editcontact._id}`,data);
    seteditcontact(null);
    fetchcontacts();
  }
  //delete contact
  const deletecontact=async(id)=>{
     await API.delete(`/${id}`)
     fetchcontacts();
  }
  return (
    <div>
      <Contactform onsubmit={editcontact ? updatecontact : addcontact} existing={editcontact}/>
      <Contactlist contacts={contacts} ondelete={deletecontact} onedit={seteditcontact} />
    </div>
  )
}

export default App
