import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Navebar from './Components/Navebar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navebar/>
    <Routes>
      <Route path ='/' element={<Hero/>}></Route>
      <Route path ='/about' element={<About/>}></Route>
      <Route path ='/program' element={<Programs/>}></Route>
      <Route path ='/testimonial' element={<Testimonials/>}></Route>
      <Route path ='/contact' element={<Contact/>}></Route>
      <Route path ='/campus' element={<Campus/>}></Route>
      <Route  element={<Title subTitle='Our PROGRAM' Title='What we offer' />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
