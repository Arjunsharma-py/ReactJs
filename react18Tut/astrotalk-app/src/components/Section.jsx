import React from "react";
import CardSlider from "./CardSlider";
import Services from "./Services";
import Faq from "./Faq";
import ProfileCard from "./ProfileCard";
import AstroSlider from "./AstroSlider";

const Section = () => {
  return (
    <>
      <div className="section-bg">
        <div className="horoscope-heading">
          <h1>Daily Hororsope</h1>
        </div>
        <CardSlider />
      </div>
      <div className="services-heading">
        <h1>Astro Services</h1>
      </div>
      <Services />
      <div className="astro-slider-bg">
        <div className="astro-heading">
          <h1>Top Astrologers</h1>
          <a href="">see all>></a>
        </div>
        <AstroSlider />
      </div>
      <Faq />
    </>
  );
};

export default Section;
