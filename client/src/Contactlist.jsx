import React from 'react'

const contactlist = ({contacts,ondelete,onedit}) => {
  return (
    <div>
      <h2 >All Contacts</h2>
      <ul>
        {
            contacts.map((c)=>(
                <li key={c._id}>
                    <strong>{c.name}</strong>-{c.phone}-{c.email}
                    <button onClick={()=>onedit(c)}>Edit</button>
                    <button onClick={()=>{ondelete(c._id)}}>Delete</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default contactlist
