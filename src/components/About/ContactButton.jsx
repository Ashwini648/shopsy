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

 const ContactButton = () => {
  return (
    <div data-aos="zoom-in" className='py-5 bg-gray-100 text-white' style={ OrangePattern}>
        <div className='container'>
        <div className='backdrop-blur-sm py-10 space-y-2 max-w-xl mx-auto'>
    {/* image */}
    <h1 data-aos="fade-up" className='text-4xl sm:text-4xl font-semibold mb-3 text-center'>Contact For Bulk Product</h1>
    <input type='text' placeholder='' className='w-full p-3'/>
    <div className="flex justify-center" >
    <button className="bg-white hover:scale-105 duration-200  mt-5  py-2 px-4  text-amber-600 border-orange-900 font-bold">
   <a href='Contact'>Contact Us</a></button>
    </div>
    </div>
    </div>
    </div>

  )
}
export default ContactButton;
