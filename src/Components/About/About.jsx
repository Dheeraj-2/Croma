import React from 'react'
import "./About.css"
import about_img from '../../Img/about.png'
import play_icon from '../../Img/play-icon.png'



const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ex odit aliquid illum, et soluta vitae? Nam tenetur aperiam, dolorem repellat possimus dolores omnis accusamus fugit sequi itaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti quibusdam deserunt dignissimos voluptatum,perspiciatis aliquid?
            Necessitatibus, ex. </p>
            <p> Ipsam, cum natus sapiente repudiandae iure minus neque tenetur expedita illo sequi veritatis eveniet provident atque perferendis odit! Quia aspernatur nulla odio quam. Ea, similique dolores excepturi nulla ducimus vero? </p>
        </div>
      
    </div>
  )
}

export default About
