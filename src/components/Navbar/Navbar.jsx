import React from 'react'
import Logo from '../../assets/logo.png'
// import dark from '../../assets/dark-mode-button.png'
// import light from '../../assets/light-mode-button.png'
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';



const Navbar = () => {
  return (
    <div className="shadow-md dark:text-white duration-200 relative z-40 dark:bg-black">
      {/* upper Navbar */}
      <div className=" py-2  bg-orange-200 dark:bg-yellow-800">
        <div className="container flex justify-between items-center dark:text-white ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-900 dark:bg-black "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
        {/* order button */}
          <button className="bg-gradient-to-r text-white bg-orange-400 py-1 px-4 rounded-full flex items-center gap-3 group">

            <span className="group-hover:block hidden transition-all duration-200">Order</span>

              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-xl text-white drop-shadow-sm cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">

                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
          </button>
{/* DarkMode */}
           <div>
            <DarkMode/>
           </div>
        </div>
      </div>
      </div>
{/* lower navbar */}
      <div data-aos="zoom-in" className="flex justify-center aos-init aos-animate dark:text-white">
        <ul className="sm:flex hidden items-center gap-4">
          <li><a href="/#" className="inline-block px-8 hover:text-primary duration-200">Home</a></li>
{/* Womens */}
      <li className="group relative cursor-pointer">
            <a href="/#"className="flex items-center gap-[2px] py-2">Womens Wear
            <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="transition-all duration-200 group-hover:rotate-180" 
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg></span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-4 text-black shadow-md"><ul>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Kurti</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Saree</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Salwarsuit</a></li>
            </ul></div></li>
{/* kids */}
          <li className="group relative cursor-pointer">
            <a href="/#" className="flex items-center gap-[2px] py-2">Kids Wear
            <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="transition-all duration-200 group-hover:rotate-180" 
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg></span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-4 text-black shadow-md"><ul>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Girls Clothes </a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Boys Clothes</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Nursery Essentials</a></li>
            </ul></div></li>

{/* mens */}
         <li className="group relative cursor-pointer">
          <a href="/#" className="flex items-center gap-[2px] py-2">Mens Wear
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="transition-all duration-200 group-hover:rotate-180" 
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg></span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-4 text-black shadow-md"><ul>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Shirt</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">T-shirt</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Trouser</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Jeans</a></li>
            </ul></div></li>



          <li><a href="/#" className="inline-block px-4 hover:text-primary duration-200">Electronics</a></li>

{/* trending */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">Trending Products<span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="transition-all duration-200 group-hover:rotate-180" 
                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg></span></a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md"><ul>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Trending Products</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Best Selling</a></li>
            <li><a href="/#" className="inline-block w-full rounded-md p-2 hover:bg-primary/20 ">Top Rated</a></li></ul></div></li>
            </ul>
            </div>
         
    </div>
    

    
  )
}

export default Navbar;