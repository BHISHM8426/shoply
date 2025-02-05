  import React from 'react'
  import MainPage from "@/components/MainPage";
  import Item from  "@/components/Item";
  import Categoriescard from '@/components/Categoriescard';
  import Dailydealscard from '@/components/Dailydealscard';
  import Homeproductcard from '@/components/HomeProductcard';



  export default function Home() {
    return (
      
        <div>
          
          <MainPage/>
          <Categoriescard/>
          <Dailydealscard/>
          <Item />
          <Homeproductcard/>
          
          
          
        </div>
      
    );
  }
