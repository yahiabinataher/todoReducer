

import React, { useContext } from 'react'

import SingelTask from './SingelTask';
import TodoContext from '../TodoContext';


const AddTask = () => {
  const {todos,dispatch,input,inputHandler,featchApi,handlerCreateTodos,handlerDeleteTodos} = useContext(TodoContext)

  return (
   <div className='container  mx-auto p-10 bg-gray-900 flex flex-col gap-6'>
    {/* form */}
     <form onSubmit={handlerCreateTodos} method='POST' action=""className='flex justify-between' >
        <input  onChange={inputHandler}  name="title" value={input.title}   className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5 ' required type="text" placeholder='What things to do ?' />
        <select name="type" onClick={inputHandler} id="" className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5'>
          <option className='bg-gray-900' value="Panding">Panding</option>
          <option className='bg-gray-900' value="Complated">Complated</option>
        </select>
        <input type="date" name='date' value={input.date} onChange={inputHandler} className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5' />
        <button  className='bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded-md text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add Task</button>
    </form>
    {/* Tasklist */}
    
   {todos.map((item,index) => {
    return(
    <SingelTask key={index} item={item}  />
    )
   })}
    </div>
    
  
  )
}

export default AddTask