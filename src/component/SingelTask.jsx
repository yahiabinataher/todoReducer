import React, { useContext, useState } from 'react'
import { FiEdit, FiTrash } from "react-icons/fi";
import TodoContext from '../TodoContext';
import axios from 'axios';




const SingelTask = ({item}) => {
  const {todos,featchApi,handlerDeleteTodos}= useContext(TodoContext)
 
    const[edit,setEdit] = useState(true)
    const [isChecked, setIsChecked] = useState(false);
    
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };


    const[editInput,setEditInput] = useState({
      title:"",
      type:"Panding"
    })
    const inputEditHandler =  (e) => {
      setEditInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value 
      }))
    }
    //handleEdit
    const handleEdit = (id) => {
      setEdit(!edit)
      const updateData = todos.find((data) => data.id === id)
      setEditInput(updateData)
    }
    const handleEditSubmit = async (e) =>  {
      e.preventDefault()
      await axios.patch(`https://periwinkle-innate-quiet.glitch.me/tasks/${editInput.id}`,editInput);
      featchApi()
      setEdit(!edit)
    }
    
   
    
  return (
    <>
    <div key={item.id} className={`task-item flex justify-between items-center ${item.type === "Complated" ? 'bg-teal-800' : 'bg-gray-800'} p-4 rounded-lg hover:bg-gradient-to-r  hover:from-teal-800 hover:to-gray-800 group`}>
            <div className='tesk-left flex items-center gap-3'>
                
                 {edit ?  <p className='group-hover:text-teal-500 text-white text-xl'>
                 <input  type="checkbox" onChange={handleOnChange} checked={isChecked} className='mr-2'/>
                  {isChecked ? <del>{item.title}</del>: <span>{item.title}</span>}
                  </p> : <form   action=""className='flex justify-between' onSubmit={ handleEditSubmit} >
        <input  name="title" value={editInput.title} onChange={inputEditHandler}    className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5 ' required type="text" placeholder='What things to do ?' />
        <button  className='bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded-md text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add Task</button>
    </form> }
            </div>
            <p className='group-hover:text-teal-500 text-white text-xl'>{item.date}</p>
            <div className='tesk-right flex items-center gap-3 '>
                <button onClick={() => handleEdit(item.id)}><FiEdit  className='text-gray-500 text-2xl hover:text-teal-500 cursor-pointer duration-300'/></button>
                <button onClick={() => handlerDeleteTodos(item.id) } ><FiTrash className='text-gray-500 hover:text-red-500 text-2xl cursor-pointer duration-300'/></button>
            </div>
       </div>
</>
  )
}

export default SingelTask