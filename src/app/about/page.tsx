import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { FaArrowRight } from "react-icons/fa6";
import background from '../../../public/background-about.jpg'
import sneakersimg from  "../../../public/sneakers.jpg";
import handbags from  "../../../public/handbags.jpg";
import shoppingman from "../../../public/shoppingman.webp"

export default function page() {
  return (
    <div className='w-[95%] mx-auto  bg-[#F9FAFB]  flex justify-center items-center rounded-b-3xl mb-5  '>
        {/* <Navbar/> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 lg:my-16 xl:pt-4 w-4/5 md:w-2/3 lg:w-full lg:px-10 xl:w-4/5 xl:px-0 '>
         <div> <h1 className='text-black  text-3xl md:text-5xl font-semibold !'>Get up to 30% Off <br />New Arrivals !</h1>
         <Link href="/products">
          <button className=' bg-black  text-white border-2 border-black border-solid text-lg sm:text-xl w-full xl:w-1/2 mx-auto sm:-mx-0 sm:w-3/4 p-1 py-2   my-4 rounded-4xl flex gap-4 justify-center  hover:bg-yellow-50 hover:text-black group '>Chose branded items <FaArrowRight className=' text-2xl pt-1 transition-transform  group-hover:animate-moveRight' /></button>
         
    </Link>   
    <h1 className='text-black font-semibold text-3xl font-serif'>Our Misson</h1>
    <p className='text-lg text-[#4B5563] font-semibold opacity-80 '> Our mission is to provide high-quality, affordable, and innovative products that enhance everyday life. We are committed to delivering exceptional customer experiences through seamless shopping, reliable service, and sustainable practices.</p>
    <h1 className='text-black font-semibold text-3xl font-serif'>Our Vision</h1>
    <p className='text-lg text-[#4B5563] font-semibold opacity-80 '> To become a provider of customized software solutions that seamlessly integrate with our clients' organizations and helps them to automate their business.

</p>
   
    </div>
         
         <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-5'>
          <div className=' flex  mx-auto sm:mx-0 flex-col gap-5'>
          <Image className='w-80 h-72 sm:w-60 xl:w-full sm:h-60 rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150'
      src={sneakersimg}
      alt="Picture of the sneakersimg"
      // unoptimized={true}
      quality={75} 
      priority={true} 
      loading="eager" 
    />
     <Image className='w-80 h-72 sm:w-60 xl:w-full sm:h-60 rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150 '
      src={handbags}
      alt="Picture of the handbags"
      // unoptimized={true}
      quality={75} 
      priority={true} 
      loading="eager" 
    />
          </div>
          <div className=' mx-auto sm:mx-0'>
          <Image className='sm:w-64   w-80  xl:w-full h-full rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150'
          src={shoppingman}
          // unoptimized={true}
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
