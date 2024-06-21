import React from 'react'
import orange from '../../assets/website/orange-pattern.jpg';

const OrangePattern = {
  backgroundImage:`url(${orange})`,
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%",

};

 const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='py-5 bg-gray-100 text-white' style={ OrangePattern}>
        <div className='container'>
        <div className='backdrop-blur-sm py-10 space-y-2 max-w-xl mx-auto'>
    {/* image */}
    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-semibold mb-3'>Get Notified About New Products</h1>
    <input type='email' placeholder='Enter your email' className='w-full p-3'/>
    <div className="flex justify-center" >
    <button className="bg-white hover:scale-105 duration-200  mt-5  rounded-full py-2 px-4  text-amber-600 border-orange-900">
    Sumbit</button>
    </div>
    </div>
    </div>
    </div>

  )
};
export default Subscribe;