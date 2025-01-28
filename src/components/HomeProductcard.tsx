import Image from 'next/image';
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
  },
  {
    id: 2,
    title: 'Furniture',
    imageSrc: chair,
    alt: 'Picture of the furniture',
  },
  {
    id: 3,
    title: 'Bedding',
    imageSrc: bedding,
    alt: 'Picture of the bedding',
  },
  {
    id: 4,
    title: 'Decor',
    imageSrc: decor,
    alt: 'Picture of the decor',
  },
  
];

const Homeproductcard = () => {
  return (
    <div className="mx-auto w-[95%] lg:w-full my-3 sm:my-14  text-xs space-y-10">
      <div className="w-full  text-center">
        <h1 className="text-2xl sm:text-4xl  font-semibold">New Arrivals for Home</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
  {newArrivals.map((item) => (
   <div
   key={item.id}
   className="flex flex-col sm:flex-row gap-3 items-center sm:justify-between w-full sm:w-60 h-auto sm:h-44 rounded-3xl text-xs"
 >
   <span className=" sm:pl-6 text-lg font-semibold">{item.title}</span>
   <Image
     className="w-4/5 sm:w-32 h-36 sm:h-44 rounded-3xl object-cover hover:animate-pulse"
     src={item.imageSrc}
     alt={item.alt}
     priority={true}
     quality={100}
   />
 </div>
 
  ))}
</div>
      
      
    </div>
  );
};

export default Homeproductcard;
