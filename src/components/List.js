import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard'

export default function List(props) {

  
  

  const {contact,handleDelete,onEdit}=props;
  return (
    <div className=' appBody min-h-screen   '>
    <div className=' h-full  md:w-[45%] bg-[#EDE4FF] flex 
    flex-col   rounded m-2 md:my-2 md:ml-2 
    w-full h-fill md:border-r-2 shadow-md
     shadow-slate-400'>
      {
        contact.map( (item) =>
         (
       
<ContactCard Item={item} key={item.id} onDelete={handleDelete}  onEdit={onEdit} /> 
         ))
        
      }
  
      </div>
      </div>
  )
}
