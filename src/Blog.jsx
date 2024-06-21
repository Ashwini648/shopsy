import React from 'react';
import './Blog.css';
import blog1 from './assets/blogphotos_1/blog1.jpg';
import blog2 from './assets/blogphotos_1/blog2.jpg';
import blog3 from './assets/blogphotos_1/blog3.jpg';
import blog4 from './assets/blogphotos_1/blog4.jpg';
import blog5 from './assets/blogphotos_1/blog5.jpg';
import blog6 from './assets/blogphotos_1/blog6.jpg';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Blog = () => {
  return (
    <div>
        <Navbar />
      <h1 className="about-header">Blog Section</h1>
      <div className="about-section">
        <div className="image-container">
          <img src={blog1} alt="blog1" className="image" />
          <div className="image-info">
            <h2><b>Explore Urban Cloth Elegance</b></h2>
            <p>Immerse yourself in the dynamic energy of urban clothing.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={blog2} alt="blog2" className="image" />
          <div className="image-info">
            <h2><b>Embrace Shoes</b></h2>
            <p>Let the shoes be a part of fashion.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={blog3} alt="blog3" className="image" />
          <div className="image-info">
            <h2><b>Experience Natural Wonder</b></h2>
            <p>Explore lush greenery and captivating wildlife on a mesmerizing journey.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={blog4} alt="blog4" className="image" />
          <div className="image-info">
            <h2><b>Discover Majestic Peaks</b></h2>
            <p>Embark on an adventure to the majestic peaks and behold the awe-inspiring grandeur of mountainous vistas.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={blog5} alt="blog5" className="image" />
          <div className="image-info">
            <h2><b>Chase the Setting Sun</b></h2>
            <p>Feel the golden hour's magic: the sun sets, casting a warm, golden glow, embracing the world in radiance.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={blog6} alt="blog6" className="image" />
          <div className="image-info">
            <h2><b>Cascade into Tranquility</b></h2>
            <p>Allow the tranquil melodies and breathtaking allure of cascading waterfalls to whisk you away to a realm of peace and calm.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Blog;