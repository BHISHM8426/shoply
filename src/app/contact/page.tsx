import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import { Appassests } from '@/constants/Asseste';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function page() {
  return (
    <div className='w-[95%] mx-auto  bg-[#F9FAFB]  flex justify-center  items-center rounded-b-3xl mb-5  '>
    {/* <Navbar/> */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-5 xl:pt-4 w-4/5 md:w-2/3 lg:w-full lg:px-10 xl:w-4/5 xl:px-0 '>
     <div className='space-y-2 md:space-y-5'> <h1 className='text-black text-2xl md:text-4xl font-semibold font-serif '>Contat Us -</h1>
     <Link href="/products">
      <button className=' bg-white  text-[#4B5563] border-2 border-black border-solid text-lg sm:text-xl w-full xl:w-1/2 mx-auto sm:-mx-0 sm:w-3/4 p-1 py-2   my-4 rounded-4xl flex gap-4 justify-center  hover:bg-yellow-50 hover:text-black group '>Chose branded items <FaArrowRight className=' text-2xl pt-1 transition-transform  group-hover:animate-moveRight' /></button>
     
</Link>   
<h1 className='text-black  text-2xl md:text-3xl font-semibold'>Work With Us</h1>
<p className=' text-[#4B5563]  '> Whether it’s online, offline, 360°, or experiential ad campaigns, our Studios team strategizes and executes them for you flawlessly. Some of our clients include Google, Alibaba, KPMG, and Visa.</p>
<h1 className='text-black text-2xl md:text-4xl font-semibold !'>Media</h1>
<p className=' text-[#4B5563]  '>Want to share story leads or news tips?
Please drop us a note at: aladinn@server.in</p>
<h1 className='text-black text-2xl md:text-4xl font-semibold '>Downlode Our Aap</h1>
<p className=' text-[#4B5563] '>Stay up to date with the region’s movers and shakers and gain unparalleled insights from data and research-driven stories – all at your fingertips.</p>
<div className="flex gap-5 ">
  <div className="max-w-[250px]">
    <Image
      className="w-full h-full rounded-xl object-cover  hover:scale-110 duration-150"
      src={"https://www.techinasia.com/assets/app_playstore.svg"}
      alt="Picture of the AAP store"
      width={100}
      height={100}
      quality={75} 
      priority={true} 
      loading="eager" 
    />
  </div>
  
  <div className="max-w-[250px]">
    <Image
      className="w-full h-auto rounded-xl object-cover  hover:scale-110 duration-150"
      src={"https://www.techinasia.com/assets/app_appstore.svg"}
      alt="Picture of the Google store"
      width={100}
      height={100}
      quality={75} 
      priority={true} 
      loading="eager" 
    />
  </div>
</div>
</div>
     
     <div className=' grid grid-cols-1 sm:grid-cols-1 lg:mx-auto gap-2 md:gap-5'>
      <div className=' flex  mx-auto sm:mx-0 flex-col gap-1  lg:gap-5'>
      <h1 className='text-black  text-2xl md:text-4xl font-semibold '>Help Center</h1>
      <p className=' text-[#4B5563] font-semibold '>Need Help ? try These :</p>
      <ul className='text-[#4B5563] '>
        <li>Submit Your Issue</li>
        <li>Find a solution at our <span>Help Center</span></li>
      </ul>
      <p className='text-[#4B5563]'>or email us at :aladinn@server.in</p>
      <div className='my-5'>
      <h1 className='text-black text-2xl md:text-4xl font-semibold '>Office</h1>
      <ul className='my-2 text-[#4B5563]'>
        <li>Jamnalal Bajaj Marg,behind Hotel Rajmahal Palace </li>
        <li>Shivaji Nagar ,C Scheme ,Ashok Nagar</li>
        <li>Jaipur,Rajasthan,302001</li>
      </ul>
      </div>
      <h1 className='text-black flex flex-wrap text-2xl md:text-4xl font-semibold '>Folow Us-</h1>
      <ul className='flex  gap-2   sm:gap-3 text-black text-2xl'>
         <li className=' hover:text-blue-800 delay-150 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full '><FaFacebookF /></li>
         <li className='hover:text-red-700 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full ' ><FaInstagram /></li>
         <li className='hover:text-red-500 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full'><FaYoutube /></li>
         <li className='hover:text-gray-400 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full'><FaTwitter /></li>
         <li className='hover:text-green-400 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full'><FaWhatsapp /></li>
         <li className='hover:text-blue-300 duration-150 transition-all hover:scale-125 bg-black text-white p-2 rounded-full'><FaTelegramPlane /></li>
      </ul>
        
      
      </div>
     
    </div>
     </div>
    </div>
  )
}
