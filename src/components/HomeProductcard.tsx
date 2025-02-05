import Image from 'next/image';
import Link from 'next/link';
import kitchen from  "../../public/kitchen.jpg";
import chair from  "../../public/chair.jpg";
import bedding from  "../../public/bedding.webp";
import decor from  "../../public/decor.jpg";

const newArrivals = [
  {
    id: 1,
    title: 'Kitchen',
    imageSrc: kitchen,
    alt: 'Picture of the kitchen',
    des: 'Best Design for kitchen Vantilation ',
    category:'kitchen-accessories'
  },
  {
    id: 2,
    title: 'Furniture',
    imageSrc: chair,
    alt: 'Picture of the furniture',
     des: 'Mesh Mid-Back Ergonomic Chair ',
     category:'furniture'
  },
  {
    id: 3,
    title: 'Bedding',
    imageSrc: bedding,
    alt: 'Picture of the bedding',
     des: 'Alternative Soft Quilaty 500 GSM Blanket Havy Winter ... ',
     category:'furniture'
  },
  {
    id: 4,
    title: 'Decor',
    imageSrc: decor,
    alt: 'Picture of the decor',
     des: 'Home Decor ,Living Room and Bedroom ',
     category :'home-decoration'
  },
  
  
];

const Homeproductcard = () => {
  return (
    <div className="mx-auto w-[95%]  my-3 sm:my-14  text-xs space-y-4 md:space-y-7">
      <div className="w-full  text-center">
      
        <h1 className='text-2xl sm:text-3xl font-semibold  '>New Arrivals for Home </h1>
      </div>

      
          <div className="grid grid-cols-1 gap-3 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {newArrivals.map((item,index) => (
              <Link key={index} href={`/products?category=${item?.category}`}>
             <div
             key={item.id}
             className="flex justify-between  bg-gray-300  overflow-hidden       rounded-3xl text-xs"
           >   <div className='w-1/2 px-4 space-y-3 my-auto '>
            <span className=" text-lg  font-semibold">{item.title}</span>
               <p className="text-sm text-gray-700">{item.des}</p>
               <p className='text-sm text-red-400'>{item.category}</p>
               {/* <span className="text-red-500 font-bold">{item.discount}</span> */}
                {/* <span className="line-through px-4 text-gray-500">{item.rate}</span> */}
              
           </div>
               <div className='h-full flex  '>
               <Image
        className="w-56 lg:w-48 h-60   rounded-3xl object-cover hover:opacity-50 hover:scale-110 duration-150"
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
      
      
    
  );
};

export default Homeproductcard;
