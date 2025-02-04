
  'use client'
  import React from 'react'
  import Image from 'next/image'
  import Navbar from './Navbar'
  import Link from 'next/link'
  import { VscArrowCircleRight } from "react-icons/vsc";
  import { IoSearch } from "react-icons/io5";
  import { MdKeyboardVoice } from "react-icons/md";
  import mainimg from "../../public/background.jpeg"
  import sneakersimg from  "../../public/sneakers.jpg";
  import handbags from  "../../public/handbags.jpg";
  import watches from  "../../public/watches.jpg";

  export default function MainPage() {
    return (
      <>
    <div className=' mx-auto my-0  h-full max-w-[95%] rounded-b-3xl py-5 bg-gray-50 bg-mainpage bg-cover bg-center '>
    {/* <Navbar/> */}

    <div className='grid grid-cols-12 gap-3 sm:gap-5    lg:py-14 sm:my-0  lg:mx-auto     max-h-full   '>
      <div className= ' col-span-12 sm:col-span-6  md:col-span-3  justify-center items-center  flex flex-col ' >
        <div className='   w-1/2 md:w-4/5 lg:w-2/3 xl:w-1/2 lg:py-8 bg-opacity-50  bg-slate-100 flex justify-center items-center  flex-col gap-4 py-4 rounded-b-3xl rounded-t-3xl '>
        {/* <div className="flex items-center   pt-4">
      <div className="w-10 h-10 bg-black rounded-full text-white flex text-xl justify-center items-center hover:animate-spin"><VscArrowCircleRight /></div>
      <div className="w-10 h-10 bg-black rounded-full text-white flex text-xs justify-center items-center -ml-1">All</div>
    </div> */}
            <Link href="/products?category=mens">
            <button className='bg-white text-black w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Mens</button>
            </Link>
            <Link href="/products?category=womens">
            <button className='bg-white text-black w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Woman</button>
            </Link>
            <Link href="/products?category=Smart-Devices">
            
        <button className='bg-white text-black w-24  rounded-3xl hover:bg-black hover:text-white py-1'>Devices</button>
            </Link>
        
        
        <Link href="/products" replace>
        <button className='bg-white text-black w-32  rounded-3xl hover:bg-black hover:text-white py-2 px-2 flex group
        bg-gradient-to-r from-red-500 via-green-500 to-blue-500 font-semibold'>Show More
          <span><VscArrowCircleRight className='text-2xl transition-transform  group-hover:animate-moveRight'/></span></button>
      </Link>

        
        {/* <div >
        <Link href="/products" className='px-3 py-1  flex justify-center gap-2 items-center rounded-b-full rounded-t-full  bg-black text-lg   text-white  group' >
        <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-tanimate-gradient ext text-transparent ">Show More </span>
        <VscArrowCircleRight className='text-2xl transition-transform  group-hover:animate-moveRight'/>
      </Link>
        
        </div> */}
        
        
        </div>
      </div>

      <div className='  col-span-12  sm:col-span-6 lg:col-span-5 xl:col-span-6 2xl:col-span-6 text-center gap-6   '>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl   font-bold text-gray-200  '>Let's Shop <br />ALL-IN-ONE</h1>
      <p className='md:text-xl  lg:text-2xl font-bold my-2 text-gray-200 '>Visit Collection And Follow Your Passion.</p></div>
    
      <div className='  flex 2xl:col-span-3 text-center  '>
        {/* <button className='bg-white text-black text-xs p-1 py-2 px-3 my-2 rounded-4xl  hover:bg-black hover:text-white hover:ease-in '>BEST SETVICE</button> */}
        {/* <h3 className='font-serif font-semibold'>Why Our Products Make You happy</h3>
        <div className='col-12  flex md:flex-col lg:flex-row justify-center gap-4 mt-3'>
          <div className='col-span-6 lg:col-span-6 '>
          <Image className='w-32 h-full rounded-xl hover:opacity-50 hover:scale-110 duration-150'
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
        </div> */}
        
              





      </div>
    </div>

    <div className='w-4/5  md:w-full lg:w-2/3 mx-auto flex flex-col gap-8 py-5  lg:py-16    h-full  rounded-3xl  '>
      <div className='flex justify-between mx-auto   bg-gray-200 w-full sm:w-3/4 rounded-l-full p-3 rounded-r-full'><IoSearch className='text-2xl' /><input className='border-none  w-full h-2/3 focus:outline-none focus:border-none pl-2 text-lg  bg-gray-200' type="text" placeholder='  Search' /> <MdKeyboardVoice className='text-2xl float-end' /></div>
    
      <div className='hidden sm:block'>
        <ul className='flex flex-wrap gap-5  justify-center  text-black cursor-pointer '>
        <li className='bg-white  px-4 py-5 my-auto text-lg rounded-2xl  font-serif  transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 '>Recent </li>
        <Link href ="/products?category=mens">
        <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif   transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 group '> Popular Items <VscArrowCircleRight className='text-3xl mx-auto transition-transform  group-hover:animate-moveRight'/></li>
        </Link>
        <Link href ="/products?category=Smart-Devices">
        <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif   transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 group '> Specil Offers  <VscArrowCircleRight className='text-3xl mx-auto transition-transform  group-hover:animate-moveRight'/></li>
        </Link>
      <Link href ="/products">
      <li className='bg-white px-4 py-1 text-lg rounded-2xl font-serif  transition ease-in-out delay-150 hover:text-white  hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 group'> Show All <VscArrowCircleRight className='text-3xl mx-auto transition-transform  group-hover:animate-moveRight'/></li>
      </Link>
      </ul>
      
      
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
