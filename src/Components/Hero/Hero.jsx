import React from "react";
import "./Hero.css";
import Dark from "../../Img/dark-arrow.png";
import About from "../About/About";
import Campus from "../Campus/Campus";
import Programs from "../Programs/Programs";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Hero = () => {
  return (
    <>
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world </h1>
        <p>
          Our cutting-edge curriculum is designed to wmpower students with the
          knowledge,skill and eperiences needed to excel in the synamic field of
          education{" "}
        </p>
        <button className="btn">
          Explore More <img src={Dark} alt="" />
        </button>
      </div>
    </div>
    <About/>
    <Campus/>
    <Programs/>
    <Testimonials/>
    <Contact/>
    {/* <Footer/> */}
    
    </>
  );
};

export default Hero;
