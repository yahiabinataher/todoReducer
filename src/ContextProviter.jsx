import React, { useEffect, useReducer, useState } from 'react'
import TodoContext from './TodoContext'
import axios from 'axios'


const ContextProviter = ({children}) => {

  //reducer func
  const todoReducer = (state,action) => {
    switch (action.type) {
      case "LOAD_DATA_FORM_API":
        return action.payload
    
      case "CREATE":
        return [...state,action.payload]
    
      case "DELETE":
        return state.filter((data) => data.id !== action.payload)  
      case "FILTER":
        return action.payload  
      default:
        return state
    }
  }
  //
  const [todos,dispatch] = useReducer(todoReducer,[])

  //form
  const [input,setInput] = useState({
    title:"",
    date:"",
    type:"Panding"
  })
  //inputHandaler
const inputHandler =  (e) => {
  setInput((prev) => ({
    ...prev,
    [e.target.name]: e.target.value 
  }))
}

//api call
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
const todosFilter = async (e) => {
  const type = e.target.value
  if(type === "all"){
    const responce = await axios.get(`https://periwinkle-innate-quiet.glitch.me/tasks`)
    dispatch({type:"FILTER",payload:responce.data})
  }else{
    const responce = await axios.get(`https://periwinkle-innate-quiet.glitch.me/tasks?type=${type}`)
  dispatch({type:"FILTER",payload:responce.data})
  }
}


  return(
    <TodoContext.Provider value={{todos,dispatch,input,setInput,inputHandler,featchApi,handlerCreateTodos,handlerDeleteTodos,todosFilter}}>{children}</TodoContext.Provider>
  )
}

export default ContextProviter