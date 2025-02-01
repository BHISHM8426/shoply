import Navbar from '@/components/Navbar';
import React from 'react';
import Productdata from '@/components/ProductsData';
import Image from 'next/image'

export default function page() {
  const renderStars = (rating: number) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    return (
      <div className="flex items-center">
       
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">★</span>
        ))}

        {hasHalfStar && <span className="text-yellow-500 text-lg">★</span>}

        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-lg">☆</span>
        ))}
      </div>
    );
  };
  return (

     <div className='w-[95%] bg-gray-100 mx-auto  ' >
     <h1 className='text-center text-3xl sm:text-4xl font-semibold py-5'>Shop the Latest & Best Products</h1>
<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3 w-[95%] rounded-b-3xl mx-auto   p-5'>
        {/* <Navbar/> */}
      
      {Productdata.map((product)=>(
         <div className=" w-full h-fit my-2   mx-auto  bg-[#edc9dd] object-cover border  rounded-xl shadow-lg p-4 max-w-xs " 
          key ={product.id}>
         <Image
           src={product.images[0]}
           alt={product.title}
           width={100}
           height={100}
           quality={100}
           unoptimized={true} 
           priority={true} 
           loading="eager" 
           className=" w-44 h-44 object-contain rounded-md mx-auto"
         />
         <h2 className="text-lg truncate font-semibold ">{product.title}</h2>
         <p className="text-gray-600  truncate text-sm">{product.description}</p>
         <div className="flex items-center ">
           <span className="text-yellow-500 text-lg"> {product.category}</span>
         </div>
         <div className="flex items-center ">
            {renderStars(product.rating)}
            <span className="ml-2 text-sm text-gray-500">({product.rating} )</span>
          </div>
         <div className=" flex justify-between items-center">
           <p className="text-lg font-bold">${product.price}</p>
           
         </div>
         <button className="mt-4  bg-black text-white px-4 py-2 rounded-md w-full">
           Add to Cart
         </button>
       </div>
      ))}
    </div>
     </div>
   
  )
}
