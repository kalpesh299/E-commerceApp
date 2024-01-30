import React from 'react'
import logo from "../assets/images/logo.png"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
export const NavBar = () => {
  return (
    <div>
       <div className='bg-black black w-screen h-16 text-white flex justify-center items-center '>
             
             <h1 className='font-bold text-lg'>Welcome all !</h1>

       </div>

       <div className='h-28 flex w-screen justify-evenly'>
        
        <img src={logo} alt='logo img'/>
        
        
      <div className='flex justify-center items-center  text-xs md:text-lg'>
      <h2 className='text-lg mr-2'>Log Out </h2>
       <div className='flex justify-center items-center mr-2'>
          <FaRegHeart  className='mr-1'/>
        <p>Wish List</p>
        </div>
        <div className='flex justify-center items-center mr-2'>
        <IoCartOutline  className='mr-1'/>
        <p >Shopping Bag</p>
        </div>
       </div>

       </div>

<div className='w-screen bg-black flex justify-around text-white items-center h-8 text-xs md:text-lg'>
     <h1>50% Off</h1>
     <h1>Free Shiping & Returns</h1>
     <h1>Diffrent Payment Methods</h1>
</div>

    </div>
  )
}
