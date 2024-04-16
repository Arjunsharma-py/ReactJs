import TrailerCard from "./TrailerCard";
import mbphoto from "../assets/mahabharat.jpeg";
import rmphoto from "../assets/ramayan.webp";
import qrphoto from "../assets/quran.jpeg";
import arphoto from "../assets/arabic.png";
import bbphoto from "../assets/bible.jpg";
import Slider from "./Slider";

const TrailerSlider = () => {
  return (
    <>
      <div className="trailer-slider">
        <h1>Scriptures</h1>
        <h2>Hindu Mythology</h2>
        <Slider>
          <TrailerCard image={mbphoto} title={"Mahabharat"} />
          <TrailerCard image={rmphoto} title={"Ramayan"} />
          <TrailerCard image={mbphoto} title={"Mahabharat"} />
          <TrailerCard image={rmphoto} title={"Ramayan"} />
          <TrailerCard image={mbphoto} title={"Mahabharat"} />
          <TrailerCard image={rmphoto} title={"Ramayan"} />
        </Slider>
        <h2>Islamic Mythology</h2>
        <Slider>
          <TrailerCard image={qrphoto} title={"Quran"} />
          <TrailerCard image={arphoto} title={"Quran"} />
          <TrailerCard image={qrphoto} title={"Quran"} />
          <TrailerCard image={arphoto} title={"Quran"} />
          <TrailerCard image={qrphoto} title={"Quran"} />
        </Slider>
        <h2>Christian Mythology</h2>
        <Slider>
          <TrailerCard image={bbphoto} title={"Bible"} />
          <TrailerCard image={bbphoto} title={"Bible"} />
          <TrailerCard image={bbphoto} title={"Bible"} />
          <TrailerCard image={bbphoto} title={"Bible"} />
          <TrailerCard image={bbphoto} title={"Bible"} />
        </Slider>
      </div>
    </>
  );
};

export default TrailerSlider;
