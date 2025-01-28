import React from 'react';
import Image from 'next/image'
import clotheimg from "../../public/clothes.jpg";
import sneakersimg from  "../../public/sneakers.jpg";
import handbags from  "../../public/handbags.jpg";
import watches from  "../../public/watches.jpg";
import socks from  "../../public/socks.png";
import tesirt from  "../../public/tshirt2.webp";
import smartwatch from  "../../public/smartimage.png";
import { FaArrowRight } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { FaBagShopping } from "react-icons/fa6";
import Categoriescard from './Categoriescard';
import Dailydealscard from './Dailydealscard';

export default function Categories() {
  return (
    <div>

      <Categoriescard/>
      <Dailydealscard/>
      {/* <div className = ' mx-auto  w-3/4 lg:w-full my-10 py-14 text-xs '>
        <div className='w-full sm:w-3/5 pl-5 text-center'><h1 className='text-2xl sm:text-3xl font-semibold '>Explore Popular Categories </h1></div>
        <Categoriescard/> */}
        {/* <div className='cols-12 flex   flex-wrap gap-4 justify-center mt-8  '>
            <div className='col-span-3 flex justify-between w-56 h-44 bg-slate-100 rounded-3xl r text-xs  '>
             <span className='my-auto pl-6 text-lg '>Clothes</span>
             <Image className='w-28 h-full rounded-3xl  object-cover hover:animate-pulse  '
      src={clotheimg}
     
      alt="Picture of the clothe"
    />
            </div>
            <div className='col-span-3 flex justify-between gap-3 w-56 h-44 bg-slate-100 rounded-3xl'>
            <span className='my-auto pl-3 text-lg '>Sneakers</span>
            <Image className='w-28 h-full rounded-3xl object-cover hover:animate-pulse '
      src={sneakersimg}
     
      alt="Picture of the sneakersimg"
    />
            </div>
            <div className='col-span-3 flex justify-between gap-4 w-56 h-44 bg-slate-100 rounded-3xl'>
            <span className='my-auto pl-5 text-lg'>Watches</span>
            <Image className='w-28 h-full rounded-3xl object-cover hover:animate-pulse '
      src={watches}
     
      alt="Picture of the watches"
    />
            </div>
            <div className='col-span-3 flex justify-between gap-4 w-56 h-44 bg-slate-100 rounded-3xl'>
           <span className='my-auto pl-5 text-lg'>Handbags</span>
           <Image className='w-28 h-full rounded-3xl object-cover hover:animate-pulse '
      src={handbags}
     
      alt="Picture of the handbags"
    />
            </div>
        </div> */}
        {/* </div> */}

        {/* <div className='h-auto max-w-[95%] rounded-3xl  bg-black bg-cover bg-center mx-auto'>
          <div className=' text-white w-full sm:w-2/3 px-8 sm:px-0 mx-auto flex gap-2 sm:gap-5 pt-8'><h1 className='text-2xl sm:text-4xl font-semibold'>Daily Deals</h1>
          <p className='text-lg sm:text-xl pt-1 sm:pt-3'>See All</p>
          <FaArrowRight  className='pt-2 sm:pt-4 text-2xl sm:text-4xl'/>
          </div>
          <div className='flex flex-wrap gap-5 mb-8 py-8 justify-center '>
            <div className='w-80 h-64  rounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
              <div className='w-full h-40 rounded-t-3xl bg-yellow-100 flex'>
                <div className='p-8 text-xl'>
                  <h1 className='text-3xl font-semibold'>Socks</h1>
                  <p>Popular Item</p>
                </div>
                <div>
                <Image className='pr-5 pt-8'
      src={socks}
      width={115}
     
      alt="Picture of the sneakersimg"
    />
                </div>
              </div>
              <div className='w-full h-24 flex justify-around  rounded-b-3xl bg-yellow-200'>
                <div className='justify-center pt-3'>
                  <span className='line-through'>$8.99</span>
                  <span className='pl-4 text-xl font-semibold'>$5.99</span> <br />
                  <button className='bg-black text-white text-lg p-1 py-1 px-3 my-2 rounded-4xl  hover:bg-white hover:text-black '>Add to cart </button>
     
                </div>
                <div className='flex gap-5 pt-12'>
                <SlLike className='text-2xl bg-white rounded-full ' />
                <FaBagShopping  className='text-xl bg-white rounded-xl '/>
                
                </div>
              </div>
            </div>


            <div className='w-80 h-64  rounded-4xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
            <div className='w-full h-40 rounded-t-3xl bg-pink-100 flex'>
            <div className='p-8 text-xl'>
                  <h1 className='text-3xl font-semibold'>T-Shirt</h1>
                  <p>Popular Item</p>
                </div>
                <div>
                <Image className='pr-10 pt-9'
      src={tesirt}
     width={195}
      alt="Picture of the sneakersimg"
    />
                </div>
            </div>
            <div className='w-full h-24 flex justify-around rounded-b-3xl bg-pink-200'>
            
            <div className='justify-center pt-3'>
                  <span className='line-through'>$12.99</span>
                  <span className='pl-4 text-xl font-semibold'>$10.99</span> <br />
                  <button className='bg-black text-white text-lg p-1 py-1 px-3  my-2 rounded-4xl  hover:bg-white hover:text-black '>Add to Cart</button>
     
                </div>
                <div className='flex gap-5 pt-12'>
                <SlLike className='text-2xl bg-white rounded-full' />
                <FaBagShopping  className='text-xl bg-white rounded-xl '/>
                
                </div>
              
            </div>
            </div>


            <div className='w-80 h-64  rounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 '>
            <div className='w-full h-40 rounded-t-3xl flex bg-cyan-100'>
            <div className='p-8 text-xl'>
                  <h1 className='text-3xl font-semibold'>Smartwatch</h1>
                  <p>Popular Item</p>
                </div>
                <div>
                <Image className='pr-10 pt-6 mt-5  '
      src={smartwatch}
      
     
      alt="Picture of the sneakersimg"
    />
                </div>
            </div>
            <div className='w-full h-24 flex justify-around rounded-b-3xl bg-cyan-200'>

            <div className='justify-center pt-3'>
                  <span className='line-through '>$10.99</span>
                  <span className='pl-4 text-xl font-semibold'>$9.99</span> <br />
                  <button className='bg-black text-white text-lg p-1 py-1 px-3  my-2 rounded-4xl  hover:bg-white hover:text-black '>Add to Cart</button>
     
                </div>
                <div className='flex gap-5 pt-12'>
                <SlLike className='text-2xl bg-white rounded-full ' />
                <FaBagShopping  className='text-xl bg-white rounded-xl '/>
                
                </div>

            </div>
            </div>
          </div>
        </div> */}
    </div>
  )
}
