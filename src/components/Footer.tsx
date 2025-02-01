import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowCircleUp } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className='space-y-10 '>
       <div className=' object-contain mx-auto h-auto max-w-[95%]   bg-black  bg-cover bg-center'>
      <div className='mx-auto bg-footerimg bg-opacity-10  object-contain  w-full h-auto  rounded-3xl  rounded-b-3xl     bg-cover bg-center'>
        
    
        <div className='flex flex-wrap justify-center   gap-10 text-2xl md:text-4xl font-serif text-white  py-14'>
           
            <h1 className='text-center'>Your One-Stop Shop for Quality Products & Exclusive Deals!</h1>
        </div>
            <h1 className='text-white text-4xl w-2/3 mx-auto   mt-40 sm:mt-60 font-semibold '>Get it Before <br /> Everyone Else !</h1>
        <div className='flex flex-wrap  justify-around  py-6'>
            <div ><button className=' text-white  bg-[#A9A4A1] bg-opacity-60 border-solid text-lg w-full mx-auto sm:-mx-0 sm:w-full  p-1 py-2 px-4   my-2 rounded-4xl flex gap-4 sm:gap-8 justify-center   '><input className='bg-transparent placeholder-white  text-white border-none focus:outline-none focus:border-none' type="text" placeholder='Your Email Address' /> <HiArrowCircleUp className=' text-3xl' /></button></div>
            <div className=' flex flex-wrap gap-6 sm:gap-3 '>
            <button className=' text-white  bg-[#A9A4A1] bg-opacity-60  text-lg  p-1 px-5 py-2 my-2 rounded-4xl hover:bg-white hover:text-black '>2023 Lookbook </button>
            <Link href="/products">
            <button className=' text-white  bg-[#A9A4A1] bg-opacity-60  text-lg  mx-auto sm:-mx-0  p-1 pl-4 py-2    my-2 rounded-4xl flex gap-2 justify-center  hover:bg-white hover:text-black animate-bounce '>Shop Now  <HiArrowCircleUp className=' text-3xl  ' /></button>
           
    </Link>
             </div>
        </div>
  </div>

{/* jdvfjkdvfdfnbrjdtgnrjnnj   jndsjkhsdfnfdv   jnskjdk */}
  <div className='  grid grid-cols-12 gap-5 w-4/5 md:w-full md:gap-0  mx-auto md:mx-2 my-3  md:my-8 lg:my-12 text-center'>
    <div className='col-span-12 md:col-span-4'>
        <ul className='flex justify-evenly md:gap-3 text-white opacity-70 font-semibold '>
    <Link href="/about" replace>
        <li className='hover:underline hover:text-blue-500'>ABOUT </li>
    </Link> <Link href="/contact" replace>
        <li className='hover:underline hover:text-blue-500'>HOW IT WORKS</li>
    </Link> <Link href="/contact" replace>
        <li className='hover:underline hover:text-blue-500'>CONTACT</li>
    </Link>
           
            
           
        </ul>
       
    </div>
    <div className=' col-span-12 w-full md:w-3/4  md:col-span-4 text-center text-white'>
      
        <Link href="/">
            <h1 className='text-3xl font-semibold'>Shoply</h1>
        </Link>
            <p className='text-xs opacity-50 py-1 underline'>Best shopping experience </p>
    </div>
    <div className='col-span-12 md:col-span-4'>
        <ul  className='flex justify-evenly  text-white  font-semibold text-lg'>
            <li className='hover:underline hover:text-blue-500'>Singup</li>
            <li className='hover:underline hover:text-blue-500'>Login</li>
            <li className=' hover:text-blue-800 transition-all hover:scale-150 my-auto'><FaFacebookF /></li>
            <li className='hover:text-red-700 transition-all hover:scale-150 my-auto' ><FaInstagram /></li>
            <li className='hover:text-red-500 transition-all hover:scale-150 my-auto'><FaYoutube /></li></ul>

    </div>
  </div>
  <div className= 'flex-col md:flex-row  lg:flex  w-full md:w-3/4 mx-auto  py-5  text-center md:justify-between text-white font-semibold opacity-45 '>
    <p className=''>Copyright @ 2025 Shoply</p>
    
    
  <p>Designed by ALDS</p>
  </div>
      </div>
      
    </div>  
  )
}
