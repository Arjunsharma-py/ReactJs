import React from "react";
import profile_photo from "../assets/profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProfileCard from "./ProfileCard";

const users = [
  {
    id: 1,
    username: "Labeksh",
    image: profile_photo,
    skills: ["Numerology", "Tarot", "Psychic"],
    languages: ["Hindi", "English", "Spanish"],
    Exp: 2,
    price: 30,
  },
  {
    id: 2,
    username: "Labeasdksh",
    image: profile_photo,
    skills: ["Numerology", "Tarot", "Psychic"],
    languages: ["Hindi", "English", "Spanish"],
    Exp: 2,
    price: 40,
  },
  {
    id: 3,
    username: "Lasdabeksh",
    image: profile_photo,
    skills: ["Numerology", "Tarot", "Psychic"],
    languages: ["Hindi", "English", "Spanish"],
    Exp: 5,
    price: 50,
  },
  {
    id: 4,
    username: "asLabeksh",
    image: profile_photo,
    skills: ["Numerology", "Tarot", "Psychic"],
    languages: ["Hindi", "English", "Spanish"],
    Exp: 1,
    price: 20,
  },
  {
    id: 5,
    username: "fdLabeksh",
    image: profile_photo,
    skills: ["Numerology", "Tarot", "Psychic"],
    languages: ["Hindi", "English", "Spanish"],
    Exp: 4,
    price: 80,
  },
];

const AstroSlider = () => {
  console.log(users.map((user) => user.id + ":" + user.username));
  return (
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
        {users.map((user) => (
          <SwiperSlide key={user.id}>
            <ProfileCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AstroSlider;
