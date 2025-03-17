import React, { useState } from 'react'
//import { LuMenuSquare } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Header = () => {
    const [ showMenu , setShowMenu ] = useState(false);

  return (
    <nav className='fixed z-10 bg-white flex w-full p-1  h-15 justify-between shadow-md  '>
        <div className='bg-amber-200 h-full w-fit ml-12 p-2  '>
            Logo
        </div>
        <div className=' h-full  mr-10 w-100 '>
            <ul className=' hidden bg-yellow-200 md:flex flex-row justify-between  w-full h-full items-center p-2'>
                <li className=' border p-4 cursor-pointer'>
                    Home
                </li>
                <li className=' border p-4 cursor-pointer'>
                    About
                </li>
                <li className=' border p-4 cursor-pointer'>
                    Testimonial
                </li>
                <li className=' border p-4 cursor-pointer'>
                    Contact
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center  h-full">
            <div className="p-1 rounded ml-auto h-15 w-15 flex justify-center items-center" onClick={()=>setShowMenu((preve)=>(!preve))}>
                    <FiMenu className='scale-300 outline-1 active:outline-none text-indigo-500 hover:text-indigo-600'/>
                </div>
            </div>

            {/* Mobile Menu (Hidden by default) */} 
            
            {
                showMenu && (
                    <ul className="md:hidden flex flex-col mt-2 space-y-2 bg-indigo-500 p-2 ">
                        <li className="border p-4 cursor-pointer">Home</li>
                        <li className="border p-4 cursor-pointer">About</li>
                        <li className="border p-4 cursor-pointer">Testimonial</li>
                        <li className="border p-4 cursor-pointer">Contact</li>
                    </ul>
                )
            }
            
        </div> 
    </nav>
  )
}

export default Header