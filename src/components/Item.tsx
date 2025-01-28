import React from 'react'
import Image from 'next/image';
import sneakersimg from  "../../public/sneakers.jpg";
import handbags from  "../../public/handbags.jpg";
import shoppingman from "../../public/shoppingman.webp"
import { FaArrowRight } from "react-icons/fa6";






export default function item() {
  return (
    <div>
      <div className='  h-auto flex flex-wrap justify-around gap-10 my-5 sm:my-10 py-5   max-w-[95%] rounded-3xl  bg-yellow-50  bg-cover bg-center mx-auto'>
        <div className=' flex flex-wrap flex-col justify-center gap-4 sm:gap-6 '>
          <h1 className='text-3xl mx-auto sm:mx-0 font-semibold'>  Luxury On My Mind </h1>
          <p className='text-md sm:text-lg mx-auto text-center  font-semibold'>Quality,design,technology,browse,the top brands </p>
          {/* <button className='flex gap-5 pt-12'> <span className='text-lg font-semibold'>Chose branded items</span> <FaArrowRight className=' text-2xl' /></button> */}
          <button className=' text-black border-2 border-black border-solid text-lg w-3/4 mx-auto sm:-mx-0 sm:w-3/4 p-1 py-2   my-2 rounded-4xl flex gap-4 justify-center  hover:bg-white hover:text-black hover:animate-bounce'>Chose branded items <FaArrowRight className=' text-2xl' /></button>
     
        </div>
        <div className=' flex flex-wrap gap-5'>
          <div className=' flex  mx-auto sm:mx-0 flex-col gap-5'>
          <Image className='w-80 h-72 sm:w-60 sm:h-60 rounded-3xl object-cover '
      src={sneakersimg}
     
      alt="Picture of the sneakersimg"
    />
     <Image className='w-80 h-72 sm:w-60 sm:h-60 rounded-3xl object-cover '
      src={handbags}
     
      alt="Picture of the handbags"
    />
          </div>
          <div className='col-span-4 mx-auto sm:mx-0'>
          <Image className='sm:w-60   w-80 h-full rounded-3xl object-cover '
      src={shoppingman}
     
      alt="Picture of the handbags"
    />
          </div>
        </div>
      </div>

     

    </div>
  )
}
