import React, { useState } from "react";
import gemini from "../assets/zodiac/gemini.png";
import ZodiacCard from "./ZodiacCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlider = () => {
  return (
    <>
      <div className="slider-wrapper">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="slider-wrapper"
        >
          <SwiperSlide>
            <ZodiacCard symbol={gemini} zodiacName={"Gemini"} />
          </SwiperSlide>
          <SwiperSlide>
            <ZodiacCard symbol={gemini} zodiacName={"Aries"} />
          </SwiperSlide>
          <SwiperSlide>
            <ZodiacCard symbol={gemini} zodiacName={"Scorpio"} />
          </SwiperSlide>
          <SwiperSlide>
            <ZodiacCard symbol={gemini} zodiacName={"cancer"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CardSlider;
