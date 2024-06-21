import React from 'react'
import Slider from 'react-slick'

const ImageList =[
    { 
        id:1,
        name:"Victor",
        text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi",
        img:"https://picsum.photos/101/101",
    },
    {
        id:2,
        name:"Victor",
        text: "Upto 50% off on all Men's Wear",
        img:"https://picsum.photos/102/102",
    },
    {
        id:3,
        name:"Victor",
        text: "Upto 50% off on all Men's Wear",
        img:"https://picsum.photos/103/103",
    },
    {
        id:4,
        name:"Victor",
        text: "Upto 50% off on all Men's Wear",
        img:"https://picsum.photos/104/104",
    },
    {
        id:5,
        name:"Victor",
        text: "Upto 50% off on all Men's Wear",
        img:"https://picsum.photos/105/105",
    }
]


const Banner = () => {
    var setting ={
        dots : true,
        arrows: false,
        infinite : true,
        Speed : 500,
        slidesToScroll: 1,
        autoplay :true,
        autoplaySpeed: 2000,
        cssEase :"linear",
        pauseOnHover : true,
        pauseOnFocus : true,
        responsive:[
            {
                
            }
        ]
    }
 const Testimonials = () => {
  return (
    <div className='container'>
     {/* Header section */}
     <div className="text-center mb-10 max-w-[600px] mx-auto">
    <p data-aos="fade-up" className="text-sm text-primary">
    What our customers are saying
    </p>
    <h1 data-aos="fade-up" className="text-3xl font-bold">
    Testimonials
    </h1>
    <p data-aos="fade-up" className="text-xs text-gray-400">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
</p>
</div>

<Slider {...setting}>
  {TestimonialsData.map((data) => (
    <div className='_my-6'>
        <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
           <div className='mb-4'>
            <img src={data.img} alt='' className='rounded-full w-20 h-20'/>
           </div>
        </div>
    </div>
  ))}  
</Slider>
</div>
  )
}
}
export default Testimonials;
