import React from 'react'
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
export const Hero = () => {
  return (
    // frist div
  <div className='min-h-[550px] flex justify-center items-center py-16 sm:py-0g dark:bg-black dark:text-white'>
     <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
    {/* image women */}
        <img 
        src={BannerImg} 
        alt='' 
        data-aos="zoom-in"
        className='max-w-[400px] h-[350] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
        />
      <div className='flex flex-col justify-center gap-6 sm:pt-0'>
        {/* h1 heading */}
       <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'> Winter Sale upto 50% Off</h1>
        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at option</p>
        <div className='flex flex-col gap-4'>
         <div data-aos="fade-up" className='flex items-center  gap-4'>
        {/* icons */}
        <GrSecure  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
        <p className='dark:text-yellow-50'>Quality Products</p>
        </div>
        <div  data-aos="fade-up" className='flex items-center  gap-4'>
        {/* icons */}
        <IoFastFood  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
        <p className='dark:text-yellow-50'>Fast Delivery</p>
        </div>
        <div  data-aos="fade-up" className='flex items-center  gap-4'>
        {/* icons */}
        <GiFoodTruck   className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
        <p className='dark:text-yellow-50'>Easy Payment method</p>
        </div>
        <div  data-aos="fade-up" className='flex items-center  gap-4'>
        {/* icons */}
        <GiFoodTruck  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
        <p className='dark:text-yellow-50'>Get Offers</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
  ) 
}
export default Hero;