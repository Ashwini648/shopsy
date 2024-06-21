import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import  Home  from './Home';
import Blog from './Blog';
import Contact from './Contact';



const App = () => {
  return (
    <div>
   <BrowserRouter>

    <Routes>
    <Route path ='/' element={<Home/>} />
      <Route path ='/Home' element={<Home/>} />
      <Route path ='/About' element={<About/>} />
      <Route path ='/Contact' element={<Contact/>} />
      <Route path ='/Blog' element={<Blog/>}/>
      
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App;