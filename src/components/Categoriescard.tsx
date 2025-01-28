import Image from 'next/image';
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
  },
  {
    id: 2,
    title: 'Sneakers',
    imageSrc: sneakersimg,
    alt: 'Picture of the sneakers',
  },
  {
    id: 3,
    title: 'Watches',
    imageSrc: watches,
    alt: 'Picture of the watches',
  },
  {
    id: 4,
    title: 'Handbags',
    imageSrc: handbags,
    alt: 'Picture of the handbags',
  },
  
];

const Categoriescard = () => {
  return (
    <div>
<div className = ' mx-auto w-[95%]  rounded-3xl sm:w-3/4 lg:w-full my-5 py-5 sm:my-16 text-xs space-y-10 '>
        <div className='w-full    text-center'><h1 className='text-2xl sm:text-3xl font-semibold '>Explore Popular Categories </h1></div>
       
 {/* <div className=" flex flex-wrap gap-4 justify-center ">
      {items.map((item) => (
        <div
          key={item.id}
          className=" flex justify-between w-60 h-48 bg-slate-100 rounded-3xl text-xs"
        >
          <span className="my-auto mx-auto font-semibold text-lg">{item.title}</span>
          <Image
            className="w-32 h-full rounded-3xl object-cover hover:animate-pulse"
            src={item.imageSrc}
            alt={item.alt}
          />
        </div>
      ))}
    </div> */}
    <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
      {items.map((item) => (
       <div
       key={item.id}
       className="flex flex-col sm:flex-row bg-slate-100 gap-3 items-center sm:justify-between w-full sm:w-60 h-auto sm:h-44 rounded-3xl text-xs"
     >
       <span className="sm:px-4 text-lg font-semibold">{item.title}</span>
       <Image
         className="w-4/5 sm:w-32 mb-3 sm:mb-0 h-36 sm:h-44  rounded-3xl object-cover hover:animate-pulse"
         src={item.imageSrc}
         alt={item.alt}
       />
     </div>
     
      ))}
    </div>
  </div>
    </div>
    
   
  );
};

export default Categoriescard;
