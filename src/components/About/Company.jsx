import React from 'react'
import cimg from '../../assets/website/company.png'
export const Company = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-10 sm:py-0g dark:bg-black dark:text-white'>
      <div className='flex flex-col justify-center gap-10 sm:pt-0 container'>
        <h1  data-aos="fade-up" className='text-4xl sm:text-6xl font-bold'>
            About us
            </h1>
        <h2 data-aos="fade-up" className='text-l text-gray-800 tracking-wide leading-7 dark:text-white text-justify'> 
        Shoppers Stop is home to a multitude of leading international and national brands for apparels, 
        fragrances, accessories, cosmetics, footwear,home décor and furnishings catering to the needs of 
        the entire family. We aspire to provide our customers a memorable international shopping experience. 
        We are one of the largest chain of department stores across India
            </h2>

        </div>
        <div className='pr-10'>
    {/* image women */}
        <img 
        src={cimg} 
        alt='' 
        data-aos="zoom-in"
        className='max-w-[1000px] h-[1000] w-full mx-300 drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
        />
        </div>
      </div>

  ) 
}
export default Company;