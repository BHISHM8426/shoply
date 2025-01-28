'use client';

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); 
  const [menuopen, setMenuopen] = useState(false);

  
  const navItems = [
    { title: 'HOME', path: '/' },
    { title: 'PRODUCTS', path: '/products' },
    { title: 'ABOUT', path: '/about' },
    { title: 'CONTACT', path: '/contact' },
  ];

  return (
    <div className={`grid ${pathname === '/' ? '' : 'bg-gray-400'} grid-cols-12 items-center p-5 bg-transparent w-full px-10`}>
      
      <div className="col-span-3 md:col-span-3 text-center md:text-left">
        <h2 className="font-black text-2xl text-center lg:text-left">Shoply</h2>
      </div>

      {/* Navbar for larger screens */}
      <div className="hidden md:visible col-span-9 md:col-span-9 md:flex flex-col flex-wrap gap-3 justify-center md:justify-end items-center sm:flex-row">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`p-2 rounded-3xl px-4 font-serif text-sm lg:text-base ${
              pathname === item.path ? 'bg-black text-white' : 'bg-white text-black '
            }`}
          >
            <Link href={item.path} className="w-full h-full block text-center">
              {item.title}
            </Link>
          </button>
        ))}
      </div>

      
      <div className="col-span-9 md:hidden flex justify-end">
        <button onClick={() => setMenuopen(!menuopen)} className="text-2xl">
          {menuopen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
          className={`${
            menuopen ? 'translate-x-0' : 'translate-x-full hidden'
          } mt-4 w-32 bg-gray-100 shadow-md rounded-lg p-1 absolute right-0 top-10 sm:right-0 sm:top-10 md:hidden transition-transform duration-700 ease-in-out`}
        >
          <ul className="flex flex-col items-start gap-1 my-3">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`w-full p-1 px-4 font-serif text-sm lg:text-base ${
                  pathname === item.path ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                <Link href={item.path} className="w-full h-full block text-center">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          </div>
    </div>
  );
}
