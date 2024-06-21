import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Company } from './Company'
import { VisionMision } from './VisionMision'
import ContactButton from './ContactButton'
import Review from './Review'

export const About = () => {
  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div>
   <Company/>
    </div>
    <div>
      <VisionMision/>
    </div>
    <div>
      <ContactButton/>
    </div>
    <div>
      <Review/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}
