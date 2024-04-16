import CardSlider from "../components/CardSlider";
import Services from "../components/Services";
import Faq from "../components/Faq";
import AstroSlider from "../components/AstroSlider";
import Categories from "../components/Categories";
import TrailerSlider from "../components/TrailerSlider";
import { AiOutlineRight } from "react-icons/ai";

const HomePage = () => {
  return (
    <>
      <Categories />
      <div className="section-bg">
        <div className="horoscope-heading">
          <h1>Daily Hororsope</h1>
          <h4>
            The stars are on your favor, you can't be horrible. They wont let
            you down.
          </h4>
        </div>
        <CardSlider />
      </div>
      <TrailerSlider />
      <div className="services-heading">
        <h1>Astro Services</h1>
      </div>
      <Services />
      <div className="astro-slider-bg">
        <div className="astro-heading">
          <h1>Top Astrologers</h1>
          <a href="">
            See all
            <AiOutlineRight />
          </a>
        </div>
        <AstroSlider />
      </div>
      <Faq />
    </>
  );
};

export default HomePage;
