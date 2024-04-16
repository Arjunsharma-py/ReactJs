import React, { useState } from "react";
import mbvideo from "../assets/videos/mahabharat.mp4";

const TrailerCard = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="trailer-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={image} alt="mahabharat" />
        {isHovered && (
          <div className="video-container">
            <video src={mbvideo} autoPlay={true} loop muted></video>
            <h5>{title}</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default TrailerCard;
