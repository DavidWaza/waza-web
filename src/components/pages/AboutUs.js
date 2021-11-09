import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
      <>
    <div className="hero-wrapper">
      <div class="aboutUs__hero-wrapper">
        <div className="jumbotext aboutUs__hero-text">
          <h1>about us</h1>
          <div className="red-under"></div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 mx-1 gap-1">
      <div className="mission">
        <h1 className="jumbotext py-32">Our Mission</h1>
      </div>
      <div className="black">
      <p className="text-white py-20 px-20 ">We aim to ELIMINATE the annoying transaction fees</p>
      </div>
    </div>
    <div className="grid grid-cols-2 my-1 mx-1 gap-1">
      <div className="black">   
      <p className="text-white py-20 px-20 ">lorem isom</p>
      </div>
      <div className="vision">
      <h1 className="jumbotext py-32">Our Vision</h1>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
