import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = ({ children }) => {
  const trailerRef = useRef();
  const [showControls, setShowControls] = useState(false);
  const [slider, setSlider] = useState(0);

  const handleDirection = (direction) => {
    let distance = trailerRef.current.getBoundingClientRect().x - 36;
    if (direction === "left" && slider > 0) {
      trailerRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlider(slider - 1);
    }
    if (direction === "right" && slider < 4) {
      trailerRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlider(slider + 1);
    }
  };

  return (
    <div
      className="trailer-wrapper"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className={`slider-action left ${!showControls ? "none" : ""}`}>
        <AiOutlineLeft onClick={() => handleDirection("left")} />
      </div>
      <div className="trailers" ref={trailerRef}>
        {children}
      </div>
      <div className={`slider-action right ${!showControls ? "none" : ""} `}>
        <AiOutlineRight onClick={() => handleDirection("right")} />
      </div>
    </div>
  );
};

export default Slider;
