  'use client';

  import React, { useState,useEffect } from 'react';
  import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import { FaRegUser } from "react-icons/fa";
  import User from './User'

  export default function Navbar() {
    const pathname = usePathname(); 
    const [menuopen, setMenuopen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
   

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    
    const navItems = [
      { title: 'HOME', path: '/' },
      { title: 'PRODUCTS', path: '/products' },
      { title: 'ABOUT', path: '/about' },
      { title: 'CONTACT', path: '/contact' },
    
    ];

    return (
      <div className='flex justify-center rounded-t-3xl '>
        <div className={`grid ${pathname === '/' ? '#F7ACB1' : ''} fixed bg-gray-200   z-50   grid-cols-12 items-center mx-auto px-7 py-4 md:py-6  w-[95%] 
        ${isScrolled ? "animate-movenav" : "relative "}`}>
        
        <div className="col-span-3 md:col-span-3  text-center md:text-left">
        <Link href="/" className='font-black text-2xl text-center lg:text-left'>
        Shoply
      </Link>
        
        </div>
      

        
      

        
        <div className="col-span-9 md:hidden flex justify-end">
          <button onClick={() => setMenuopen(!menuopen)} className="text-2xl ">
          {menuopen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

      
      

          {/* Navbar for larger screens */}
            <div className=" z-30 hidden lg:visible   col-span-9 md:col-span-9 md:flex flex-col flex-wrap gap-3 justify-center md:justify-end items-center sm:flex-row">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`p-2 px-4 rounded-3xl  font-serif text-sm lg:text-base ${
              pathname === item.path ? 'bg-black text-white' : 'bg-white text-black duration-300 hover:bg-black hover:text-white '
              }`}
            >
              <Link href={item.path} className="w-full h-full block text-center">
              {item.title}
              
              </Link>
            </button>
            
          ))}
          <Link href="/user" >
              <FaRegUser className='text-2xl ' />
              </Link>
        </div>
        
      </div>
      {/* Navbar for mobile device  */}
      <div
    className={`transition-all duration-700 ease-in-out transform ${
      menuopen ? 'opacity-100 scale-100 translate-y-9 ' : 'opacity-0 scale-95 -translate-y-5'
    }
     w-[95%] py-1 rounded-b-3xl overflow-hidden flex justify-evenly bg-white shadow-md md:hidden fixed mt-7 lg:hidden`}
  >
    
            <ul className="flex z-30 items-start gap-3 my-2">
              {navItems.map((item) => (
                <li
                onClick={()=>setMenuopen(false)}
                  key={item.path}
                  className={`p-2  rounded-md  font-serif text-xs lg:text-base ${
                  pathname === item.path ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  <Link href={item.path} className="w-full h-full block text-center">
                    {item.title}
                  </Link>
                </li>
              ))}
              <Link href="/user" >
              <FaRegUser className='text-2xl text-blue-500' />
              </Link>
              
            </ul>
            
            </div>
          
      
      </div>
      
    );
  }
