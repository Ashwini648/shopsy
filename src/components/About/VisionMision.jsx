import React from 'react'

const ProductsData = [
  {
    id: 1,
    h1:"Vision",
    title: "Our Vision",
    description:
    "To be an inspirational and trusted brand, transforming customers' lives through fashion and delightful shopping experience every time lives through fashion.",
  },
  {
    id: 2,
    h1:"Mission",
    title: "Our Mission ",
    description:
      "The Vision of the company is to enhance the productivity of individuals to create job opportunities for the youth and provide the best quality services to the clients.",
  },
  {
    id: 3,
    h1:"Goal",
    title: "Our Goal",
    description:
      "The Vision of the company is to enhance the productivity of individuals to create job opportunities for the youth and provide the best quality services to the clients.",
  },
];

export const VisionMision = () => {
  return (
    <div><div className="dark:bg-black dark:text-white">
    <div className="container">
      {/* Body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center py-40">
        {ProductsData.map((data) => (
          <div
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-primary hover:text-black relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* image section */}
            <div className="h-[140px]">
              <img
                src={data.img}
                alt=""
                className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
              <div className='w-40 h-40 bg-red-600 rounded-full block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' >
                <h1 className='font-bold text-3xl  text-center  text-white py-16 font-serif'>{data.h1}</h1>
                </div>
            </div>
            {/* details section */}
            <div className="  justify-center ">
              <h1 className="text-2xl font-bold text-center">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-black duration-300 text-justify line-clamp-8  m-10">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  )
}
