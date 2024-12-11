import React from "react";
import "./Hero.css";
import heroImage from "../Assets/hard.jpg"




const Hero = () => {
  return (
    <div className="hero">
      
      <img src={heroImage} alt="Hero Banner" className="hero-image" />
    </div>
  );
};

export default Hero;
