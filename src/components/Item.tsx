import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import sneakersimg from  "../../public/sneakers.jpg";
import handbags from  "../../public/handbags.jpg";
import shoppingman from "../../public/shoppingman.webp"
import { FaArrowRight } from "react-icons/fa6";






export default function item() {
  return (
    <div>
      <div className='  h-auto flex flex-wrap justify-around gap-5 sm:gap-10 my-5 sm:my-10 py-5   max-w-[95%] rounded-3xl  bg-yellow-50  bg-cover bg-center mx-auto'>
        <div className=' flex flex-wrap flex-col  gap-2 sm:gap-6 mx-3 md:mx-0 my-auto '>
          <h1 className='text-2xl sm:text-3xl mx-auto sm:mx-0 font-semibold'>   Elevate Your Style with Premium Picks</h1>
          <p className='text-md sm:text-lg   font-semibold opacity-70'>Quality,design,technology,browse,the top brands </p>
          <p className='opacity-80'>  Discover top brands, trendsetting designs,<br /> and unbeatable quality—crafted for those who demand the best.</p>
          
          {/* <button className='flex gap-5 pt-12'> <span className='text-lg font-semibold'>Chose branded items</span> <FaArrowRight className=' text-2xl' /></button> */}
          <Link href="/products">
          <button className='  text-black border-2 border-black border-solid text-lg w-3/4 mx-auto sm:-mx-0 sm:w-3/4 p-1 py-2   my-2 rounded-4xl flex gap-4 justify-center  hover:bg-white hover:text-black group '>Choose branded items <FaArrowRight className=' text-2xl transition-transform  group-hover:animate-moveRight' /></button>
         
    </Link>
      </div>
      <div className=' flex flex-wrap gap-5'>
      <div className=' flex  mx-auto sm:mx-0 flex-col gap-5'>
      <Image className='w-80 h-72 sm:w-60 sm:h-60 rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150'
      src={sneakersimg}
      alt="Picture of the sneakersimg"
      quality={75} 
      priority={true} 
      loading="eager" 
    />
     <Image className='w-80 h-72 sm:w-60 sm:h-60 rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150 '
      src={handbags}
      alt="Picture of the handbags"
      quality={75} 
      priority={true} 
      loading="eager" 
    />
          </div>
          <div className='col-span-4 mx-auto sm:mx-0'>
          <Image className='sm:w-60 xl:w-80   w-80 h-full rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150'
          src={shoppingman}
          quality={75} 
          priority={true} 
          loading="eager" 
          alt="Picture of the handbags"
    />
          </div>
        </div>
      </div>

     

    </div>
  )
}
