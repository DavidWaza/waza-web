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
      <p className="text-white py-10 px-20 text-md">We build technology to help Africa’s best businesses grow - from new startups, to market leaders launching new business models.

We make it easy for businesses to accept secure payments from multiple local and global payment channels, and then we provide tools to help you retain existing customers, and acquire new ones.

As makers and business owners ourselves, we’re inspired by a vision of millions of exceptional businesses across the continent who’re profitable, envied, and loved. We believe that in our lifetimes, businesses in Africa will routinely go toe to toe with the best companies on the planet, and win. Building that world gives us purpose, every day.</p>
      </div>
    </div>
    <div className="grid grid-cols-2 my-1 mx-1 gap-1">
      <div className="black">   
      <p className="text-white py-32 px-20 ">We’re a deeply mission-driven company, and these are the core ideas we return to when we make decisions.</p>
      </div>
      <div className="vision">
      <h1 className="jumbotext py-32">Our Values</h1>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
