import React from 'react'
import { IoDocumentText } from "react-icons/io5";



const Header = () => {
  return (
    <header className='header container mx-auto bg-gray-900 p-10 border-b border-dashed border-teal-900 rounded-tl-lg rounded-tr-lg '>
        <div className='flex justify-between items-center '>
        <h2 className='uppercase font-semibold tracking-widest flex gap-2 text-teal-500 items-center'>
            <span><IoDocumentText/></span>
            <span>Todo Apps</span>
        </h2>
        <select name="" id="" className='bg-gray-800 outline-none border-b-2 border-gray-600 focus:border-teal-500 text-white py-2 px-5'>
          <option value="all">All</option>
          <option value="complated">Complated</option>
          <option value="panding">Panding</option>
          <option value="running">Running</option>
        </select>
        </div>
    </header>
  )
}

export default Header