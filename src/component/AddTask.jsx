import { data } from 'autoprefixer';
import axios from 'axios';
import React, {  createRef, useEffect, useReducer, useState } from 'react'

import SingelTask from './SingelTask';


const AddTask = () => {
  //reducer func
const todoReducer = (state,action) => {
  switch (action.type) {
    case "LOAD_DATA_FORM_API":
      return action.payload
  
    case "CREATE":
      return [...state,action.payload]
  
    case "DELETE":
      return state.filter((data) => data.id !== action.payload)  
    default:
      return state
  }
}

const [todos,dispatch] = useReducer(todoReducer,[])
const [editForm,setEditForm] = useState(true)

const [input,setInput] = useState({
  title:"",
  type:"Panding"
})
//inputHandaler
const inputHandler =  (e) => {
  setInput((prev) => ({
    ...prev,
    [e.target.name]: e.target.value 
  }))
}

//api cal
const featchApi = async() => {
  const responce = await axios.get("https://periwinkle-innate-quiet.glitch.me/tasks")
  dispatch({type:"LOAD_DATA_FORM_API",payload:responce.data})
}
useEffect(() => {
  featchApi()
},[])

//todos create
const handlerCreateTodos =async (e) => {
  e.preventDefault()
  const res = await axios.post(`https://periwinkle-innate-quiet.glitch.me/tasks`,input)
  dispatch({type:"CREATE", payload:res.data})
  setInput({
    title:"",
    type:"Panding"
  })
}
//todos delete
const handlerDeleteTodos =async(id) => {
  await axios.delete(`https://periwinkle-innate-quiet.glitch.me/tasks/${id}`,)
  dispatch({type:"DELETE",payload : id})
}
const handleEdit = () => {
  setEditForm((prev) => !prev)
}


  return (
   <div className='container  mx-auto p-10 bg-gray-900 flex flex-col gap-6'>
    {/* form */}
     <form onSubmit={handlerCreateTodos} method='POST' action=""className='flex justify-between' >
        <input  onChange={inputHandler}  name="title" value={input.title}   className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5 ' required type="text" placeholder='What things to do ?' />
        <select name="type" onClick={inputHandler} id="" className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5'>
          <option className='bg-gray-900' value="Panding">Panding</option>
          <option className='bg-gray-900' value="Complated">Complated</option>
        </select>
        <button  className='bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded-md text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add Task</button>
    </form>
    {/* Tasklist */}
    
   {todos.map((item,index) => {
    return(
    <SingelTask key={index} item={item} handlerDeleteTodos={handlerDeleteTodos} edit={editForm} handleEdit={handleEdit} />
    )
   })}
    </div>
    
  
  )
}

export default AddTask