import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Header from "../components/header/header";
import SendEmail from "../components/SendEmail";
import ImgContentBox from "../components/ImgContentBox";
import astro_circle from "../assets/landing_page/astro_circle.png";
import tv from "../assets/landing_page/tv.png";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg-img">
        <div className="connect-container">
          <h1>Connect With Astrologer</h1>
          <p>
            Unveiling the cosmic mysteries, guiding you through lifes journey
            with precision and insight.
          </p>
          <SendEmail />
        </div>
      </div>
      <div className="ads-container">
        <div className="ads-banner">
          <img src={astro_circle} alt="astro-image" />
          <div className="ads-description">
            <h4>The AstroStar you love for just $4.99.</h4>
            <p>Get the Standard with ads plan</p>
            <Link to="/">
              Learn more <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
      <ImgContentBox
        right={true}
        imgSrc={tv}
        heading={"Live Streaming with Astrologer"}
        para={
          "Expore the celestial dance of planets and stars, unlocking the secrets of your destiny."
        }
      />
      <div className="hr-line" />
      <ImgContentBox
        right={false}
        imgSrc={tv}
        heading={"Cultural Category"}
        para={
          "Navigate the cosmic landscape with confidence, as the planets whispher their tales in your birth chart."
        }
      />
      <div className="hr-line" />
      <ImgContentBox
        right={true}
        imgSrc={tv}
        heading={"LLM based Products"}
        para={
          "Expore the celestial dance of planets and stars, unlocking the secrets of your destiny."
        }
      />
      <div className="hr-line" />
      <Footer />
    </>
  );
};

export default LandingPage;
