'use client'
import React from 'react'
import Productdata from '@/components/ProductsData';
import Image from 'next/image';

const page = ({params}:any) => {
    const {slug} =params;
    
    const product = Productdata.find((item) => item.id === parseInt(slug));

    if(!product){
      return <div className='text-center text-3xl text-black my-10'>Product not available</div>
    }
  return (
    <div>
       <div className=" flex justify-center items-center w-[95%] mx-auto bg-gray-300 " 
                key ={product.id}>
              <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-300 w-3/4'>
                <div className='w-92 h-80 my-auto'>
                   <Image
                             src={product.images[0]}
                             alt={product.title}
                             width={200}
                             height={100}
                             quality={75}
                              priority={true} 
                              loading="eager" 
                            className=" w-full h-full  object-contain rounded-md mx-auto"
                    />
                </div>
                <div className='w-full lg:w-3/4 space-y-3 my-5'>
                <h2 className="text-2xl truncate font-semibold ">{product.title}</h2>
         <p className="text-gray-600   md:text-lg">{product.description}</p>
         <div className="flex items-center ">
           <span className="text-red-500 text-lg"> {product.category}</span>
           <span className="ml-2 text-sm text-gray-500">({product.rating} )</span>
         </div>
        
         <div className=" flex gap-5">
           <p className="text-xl ">${product.price}</p>
           <p className="text-lg ">{product.category}</p>
           <p className="text-lg ">{product.brand}</p>
         </div>
         <div className='text-xs'>
         <span >{product.warrantyInformation}</span>
           
           <span className='pl-5'>{product.returnPolicy}</span>
           <p >{product.tags}</p>
         </div>
         <button className="mt-4  bg-black text-white px-4 py-2 rounded-md w-3/4 duration-150 hover:bg-white hover:text-black"
          onClick={() => alert('Product added successfully to the cart!')}>
         
           Add to Cart
         </button>
                </div>
              </div>
             </div>
      
    </div>
  )
}

export default page
