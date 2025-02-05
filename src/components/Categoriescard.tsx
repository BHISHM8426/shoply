import Image from 'next/image';
import Link from 'next/link';
import clotheimg from "../../public/clothes.jpg";
import sneakersimg from  "../../public/sneakers.jpg";
import handbags from  "../../public/handbags.jpg";
import watches from  "../../public/watches.jpg";

const items = [
  {
    id: 1,
    title: 'Clothes',
    imageSrc: clotheimg,
    alt: 'Picture of the clothes',
    des: 'This is branded Puma shoes',
    rate: '$300',
    discount: '$229',
     category:'mens'
    
  },
  {
    id: 2,
    title: 'Sports',
    imageSrc: sneakersimg,
    alt: 'Picture of the sneakers',
    des: 'Styles Sports  shoes for man',
    rate: '$677',
    discount: '$499',
    category:'sports-accessories'
   
  },
  {
    id: 3,
    title: 'Watches',
    imageSrc: watches,
    alt: 'Picture of the watches',
    des: 'Fire-Bolt  36.3 mm AMOLD display',
    rate: '$199',
    discount: '$109',
    category:'mens-watches'
  },
  {
    id: 4,
    title: 'Handbags',
    imageSrc: handbags,
    alt: 'Picture of the handbags',
    des: 'Latest Styles Womens  Shoulder Handbag  ',
    rate: '$100',
    discount: '$70',
    category:'womens-bags'
  },
  
  
];

const Categoriescard = () => {
  return (
    <div>
<div className = ' mx-auto w-[95%] rounded-3xl  my-5  sm:my-8 text-xs space-y-7 '>
        <div className='w-full    text-center'><h1 className='text-2xl sm:text-3xl font-semibold  '>Explore Popular Categories </h1></div>
       

    <div className="grid grid-cols-1 gap-3 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {items.map((item ,index) => (
        <Link key={index} href={`/products?category=${item?.category}`}>
       <div
       key={item.id}
       className="flex justify-between  bg-gray-300 overflow-hidden   rounded-3xl text-xs"
     >   <div className='w-1/2 pl-4 space-y-3 my-auto'>
      <span className=" text-lg  font-semibold">{item.title}</span>
         <p className="text-sm text-gray-700">{item.des}</p>
         <p className='text- text-red-400'>{item.category}</p>
         {/* <span className="text-red-500 font-bold">{item.discount}</span> */}
          {/* <span className="line-through px-4 text-gray-500">{item.rate}</span> */}
        
     </div>
         <div className='h-full   '>
         <Image
  className="w-56 lg:w-48 h-60   rounded-3xl object-cover duration-150 hover:opacity-50 hover:scale-105 "
  src={item.imageSrc}
  alt={item.alt}
  width={500}
  height={500}

  quality={75} 
  priority={true} 
  loading="eager" // Ensures it loads immediately
/>
         </div>
     
     </div>
     </Link>
      ))}
    </div>
  </div>
    </div>
    
   
  );
};

export default Categoriescard;


