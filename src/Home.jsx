import React from 'react'
// import Navbar from './components/Navbar/Navbar';

import Navbar from './components/Navbar/Navbar';
import DarkMode from './components/Navbar/DarkMode';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import TopProducts from './components/Topproduct/Topproduct';
import { Hero } from './components/Hero/Hero';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
// import { Testimonials } from './components/Testimonials/Testimonials';
const Home =() => {
    return(
      <>
          <Navbar/>
          <Banner/>
          <Products/>
          <TopProducts/>
          <Hero/>
          <Subscribe/>
          <Products/>
          {/* <Testimonials/> */}
          <Footer/>
      </>
      
    )
};
export default Home;