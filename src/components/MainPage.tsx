
'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'
import { VscArrowCircleRight } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import mainimg from "../../public/background.jpeg"
export default function MainPage() {
  return (
    <>
   <div className=' mx-auto my-2  h-full max-w-[95%] rounded-3xl  bg-gray-50 bg-mainpage bg-cover bg-center '>
   <Navbar/>

   <div className='grid grid-cols-12 gap-3 sm:gap-5    lg:py-14 sm:my-8  lg:mx-auto     max-h-full   '>
    <div className= ' col-span-12 sm:col-span-6  md:col-span-3  justify-center items-center  flex flex-col ' >
      <div className='   w-1/2 bg-opacity-50  bg-slate-100 flex justify-center items-center  flex-col gap-4 py-4 rounded-b-3xl rounded-t-3xl '>
      {/* <div className="flex items-center   pt-4">
    <div className="w-10 h-10 bg-black rounded-full text-white flex text-xl justify-center items-center hover:animate-spin"><VscArrowCircleRight /></div>
    <div className="w-10 h-10 bg-black rounded-full text-white flex text-xs justify-center items-center -ml-1">All</div>
  </div> */}

       <button className='bg-white text-black    w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Man</button>
       <button className='bg-white text-black w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Woman</button>
       <button className='bg-white text-black w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Kids</button>
       <div >
       <Link href="/products" className='px-3 py-1  flex justify-center gap-2 items-center rounded-b-full rounded-t-full  bg-black text-lg   text-white hover:scale-110' >
       <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-gradient scale-y-110">Show More </span>
       <VscArrowCircleRight className='text-2xl'/>
    </Link>
       
       </div>
      
       
      </div>
    </div>

    <div className='  col-span-12  sm:col-span-6 lg:col-span-5 xl:col-span-6 2xl:col-span-6 text-center gap-6   '>
      <h1 className='text-2xl md:text-3xl lg:text-5xl   font-bold text-black  '>Let's Shop <br />ALL-IN-ONE</h1>
    <p className='md:text-xl  lg:text-2xl font-bold my-2 text-black animate-colorSlide'>Visit Collection And Follow Your Passion.</p></div>
  
    <div className=' hidden sm:block col-span-12 md:col-span-3 lg:col-span-4 xl:col-span-3 2xl:col-span-3 text-center  '>
      {/* <button className='bg-white text-black text-xs p-1 py-2 px-3 my-2 rounded-4xl  hover:bg-black hover:text-white hover:ease-in '>BEST SETVICE</button> */}
      <h3 className='font-serif font-semibold'>Why Our Products Make You happy</h3>
      <div className='col-12  flex md:flex-col lg:flex-row justify-center gap-4 mt-3'>
        <div className='col-span-6 lg:col-span-6 '>
        <Image className='w-32 h-full rounded-xl'
      src={mainimg}

      priority={true}
      quality={100}
     
      alt="Picture of the author"
    />
        </div>
        <div className='  col-span-6 lg:col-span-6 text-center   flex flex-col gap-3 '>
          <button className=' p-3 font-semibold  w-28 rounded-xl bg-white transition-all hover:scale-110 '>Best Value</button>
          <button className='bg-white rounded-xl w-28 p-3 font-semibold transition-all hover:scale-110  '>Case-Back</button>
        </div>
      </div>
    </div>
  </div>

  <div className='w-4/5 sm:w-3/5 mx-auto flex flex-col gap-8  lg:py-16    h-full  rounded-3xl  '>
    <div className='flex justify-between mx-auto mb-4 sm:mb-0  bg-gray-200 w-full sm:w-3/4 rounded-l-full p-3 rounded-r-full'><IoSearch className='text-2xl' /><input className='border-none  w-full h-2/3 focus:outline-none focus:border-none pl-2  bg-gray-200' type="text" placeholder='  Search' /> <MdKeyboardVoice className='text-2xl float-end' /></div>
   
    <div className='hidden sm:block'>
      <ul className='flex flex-wrap gap-5 justify-center  text-black cursor-pointer '>
      <li className='bg-white  px-4 py-5 my-auto text-lg rounded-2xl  font-serif  transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 '>Recent </li>
      <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif   transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 '> Popular Items <VscArrowCircleRight className='text-3xl mx-auto'/></li>
      <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif   transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 '> Specil Offers  <VscArrowCircleRight className='text-3xl mx-auto'/></li>
      <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif  transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 '> Show All <VscArrowCircleRight className='text-3xl mx-auto'/></li></ul>
      {/* <div className=' col-3 bg-white   w-36 h-32  rounded-xl flex justify-center  items-center transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  '> <h1>Recent</h1></div>
      <div className=' col-3 bg-white  w-36 h-32 p-1 sm:p-4 rounded-xl flex transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '> <span>Popular Item</span> <VscArrowCircleRight className='text-6xl ' /></div>
      <div className=' col-3  bg-white  w-36 h-32 p-1 sm:p-5 rounded-xl flex transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '> <span>Specil Offer for you</span> <VscArrowCircleRight className='text-8xl' /></div>
      <div className=' col-3  w-36 h-32 p-2 sm:p-5 rounded-xl bg-blue-700 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  '> <span>Show All</span><VscArrowCircleRight  className=' text-4xl mx-auto'/> */}
      {/* </div> */}
    </div>
   
    </div>
    
    

   </div>
   
    </>
  )
}
