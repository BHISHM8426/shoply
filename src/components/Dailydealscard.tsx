'use client'
import Image from 'next/image';
import { SlLike } from 'react-icons/sl';
import { FaArrowRight } from 'react-icons/fa';
import socks from  "../../public/socks.png";
import tesirt from  "../../public/tshirt2.webp";
import smartwatch from  "../../public/smartimage.png";
import { FaBagShopping } from "react-icons/fa6"
import Link from 'next/link';




const dailyDeals = [
  {
    id: 1,
    title: 'Socks',
    description: 'Popular Item',
    originalPrice: '$8.99',
    discountedPrice: '$5.99',
    imageSrc: socks,
    imageAlt: 'Picture of socks',
    bgTop: 'bg-yellow-100',
    bgBottom: 'bg-yellow-200',
  },
  {
    id: 2,
    title: 'T-Shirt',
    description: 'Popular Item',
    originalPrice: '$12.99',
    discountedPrice: '$10.99',
    imageSrc: tesirt,
    imageAlt: 'Picture of a T-Shirt',
    bgTop: 'bg-pink-100',
    bgBottom: 'bg-pink-200',
  },
  {
    id: 3,
    title: 'Smartwatch',
    description: 'Popular Item',
    originalPrice: '$10.99',
    discountedPrice: '$9.99',
    imageSrc: smartwatch,
    imageAlt: 'Picture of a smartwatch',
    bgTop: 'bg-cyan-100',
    bgBottom: 'bg-cyan-200',
  },
  
  
  
];

const Dailydealscard = () => {
  return (
    
    <div className="h-auto max-w-[95%] rounded-3xl bg-black bg-cover bg-center mx-auto space-y-7 py-5">
      <div className="text-white w-full   flex justify-center gap-2 sm:gap-3 ">
        <h1 className="text-2xl sm:text-3xl font-semibold">Daily Deals See All </h1>
       
        <FaArrowRight className=" text-3xl sm:text-4xl" />
      </div>
      <div className="flex flex-wrap gap-5  justify-center">
        {dailyDeals.map((deal) => (
          <Link href={`/products/${deal.id}`}
            key={deal.id}
            className="w-80 h-64 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <div className={`w-full h-40 rounded-t-3xl flex ${deal?.bgTop}`}>
              <div className="p-8 text-xl">
                <h1 className="text-3xl font-semibold">{deal.title}</h1>
                <p>{deal.description}</p>
              </div>
              <div>
                <Image
                  className="pr-5 pt-8 hover:opacity-50 hover:scale-110 duration-150"
                  src={deal.imageSrc}
                  alt={deal.imageAlt}
                  width={115}
                  height={100}
                quality={75} 
  priority={true} 
  loading="eager" 
                />
              </div>
            </div>
            <div className={`w-full h-24 flex justify-around rounded-b-3xl ${deal.bgBottom}`}>
              <div className="justify-center pt-3">
                <span className="line-through">{deal.originalPrice}</span>
                <span className="pl-4 text-xl font-semibold">{deal.discountedPrice}</span>
                <br />
                <button className="bg-black text-white text-lg p-1 py-1 px-3 my-2 rounded-4xl hover:bg-white hover:text-black"
                 onClick={() => alert('Product added successfully to the cart!')}>
                  Add to Cart
                </button>
              </div>
              <div className="flex gap-5 pt-12">
                <SlLike className="text-2xl " />
                <FaBagShopping className="text-2xl " />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dailydealscard ;
