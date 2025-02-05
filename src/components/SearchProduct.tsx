import React, { useState } from 'react';
import Link from 'next/link';
import ProductsData from './ProductsData';
import { useRouter } from 'next/navigation';

export default function SearchProduct({ searchitem }:any) {

    const router = useRouter()
  const filteredProducts = ProductsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchitem.toLowerCase()) ||
      item.category.toLowerCase().includes(searchitem.toLowerCase())
  );

 

  return (
    <div className='absolute top-14 rounded-lg w-full'>
      {searchitem  ? (
        filteredProducts.map((item ,index) => (
            <Link key={index} href ={`/products/${item.id}`}>
          <div key={item.id}  >
            <ul className='bg-slate-300 cursor-pointer hover:bg-black hover:text-white duration-300  text-black p-1'>
              <li>{item.title} ({item.category})</li>
            </ul>
          </div>
          </Link>
        ))
      ) : (
        // <p className='bg-white text-black p-2'>No products found</p>
        ""
      )}
    </div>
  );
}
