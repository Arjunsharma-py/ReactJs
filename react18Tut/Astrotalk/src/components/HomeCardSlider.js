import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import video from "../assests/home.jpg";
import img1 from "../assests/1.jpg";
import image from "../assests/2.jpg";
import img2 from "../assests/3.jpg";
import img3 from "../assests/4.jpg";
import img4 from "../assests/5.jpg";
import img5 from "../assests/6.jpg";
import img6 from "../assests/7.jpg";
import img7 from "../assests/8.jpg";
import HomeCard from "./homeCard";

export default React.memo(function HomeCardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      className="flex column"
      showControls={showControls}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 style={{ color: "white" }}>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider flex" ref={listRef}>
          {/* {data &&
            data.map((movie, index) => {
              return <Card movieData={movie} index={index} key={movie.id} />;
            })} */}
          <HomeCard movieData={image} />
          <HomeCard movieData={img1} />
          <HomeCard movieData={img2} />
          <HomeCard movieData={img3} />
          <HomeCard movieData={img4} />
          <HomeCard movieData={img5} />
          <HomeCard movieData={img6} />
          <HomeCard movieData={image} />
          <HomeCard movieData={img7} />
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});
// const Container = styled.div`
//   gap: 1rem;
//   position: relative;
//   padding: 2rem 0;
//   h1 {
//     margin-left: 50px;
//   }
//   .wrapper {
//     .slider {
//       width: max-content;
//       gap: 1rem;
//       transform: translateX(0px);
//       transition: 0.3s ease-in-out;
//       margin-left: 50px;
//     }
//     .slider-action {
//       position: absolute;
//       z-index: 99;
//       height: 100%;
//       top: 0;
//       bottom: 0;
//       width: 50px;
//       transition: 0.3s ease-in-out;
//       svg {
//         font-size: 2rem;
//       }
//     }
//     .none {
//       display: none;
//     }
//     .left {
//       left: 0;
//     }
//     .right {
//       right: 0;
//     }
//   }
// `;

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;
