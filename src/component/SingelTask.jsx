import React, { useState } from 'react'
import { FiEdit, FiTrash } from "react-icons/fi";

const SingelTask = ({item,handlerDeleteTodos,edit ,handleEdit}) => {
 
    
  return (
    <>
    <div key={item.id} className={`task-item flex justify-between items-center ${item.type=== "Completed" ? 'bg-blue-700' :'bg-teal-800'} p-4 rounded-lg hover:bg-gradient-to-r  hover:from-teal-800 hover:to-gray-800 group`}>
            <div className='tesk-left flex items-center gap-3'>
                
                 {edit ?  <p className='group-hover:text-teal-500 text-white text-xl'>{item.title}</p> :  <p className='group-hover:text-teal-500 text-white text-xl'>hello</p> }
            </div>
            <div className='tesk-right flex items-center gap-3 '>
                <button onClick={handleEdit}><FiEdit  className='text-gray-500 text-2xl hover:text-teal-500 cursor-pointer duration-300'/></button>
                <button onClick={() => handlerDeleteTodos(item.id) } ><FiTrash className='text-gray-500 hover:text-red-500 text-2xl cursor-pointer duration-300'/></button>
            </div>
        </div>
</>
  )
}

export default SingelTask