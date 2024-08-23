import React, { useEffect, useState } from 'react'
import'./Navebar.css'
import {Link} from 'react-router-dom'
import logo from '../Img/im2.jpeg'
import { FaBars } from "react-icons/fa6";
import $ from 'jquery'

$(function()
{
  $('.bar').on("click",()=>
  {
    $('ul').toggleClass('active')
  })
})

const Navebar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) :setSticky(false);
    })
  },[])

  function btn() {
    
  }

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
    <img src={logo} alt="logo" className='logo'/>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/program"><li>Program</li></Link>
      <Link to="/about"><li>About US</li></Link>
      <Link to="/campus"><li>Campus</li></Link>
      <Link to="/testimonial"><li>Testimonial</li></Link>
      <Link to="/contact"><li><button id='btn'>Contact US</button> </li></Link>
    </ul>

    <FaBars className='bar' />

    </nav>
  )
}

export default Navebar
