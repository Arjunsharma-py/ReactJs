import React from "react";
import tv from "../assets/tv_display.jpeg";

const BoxDisplay = (props) => {
  return (
    <div className="tv-container">
      {!props.right && <img src={props.imgSrc} alt="tv" />}
      <div className="tv-container-box">
        <div className="tv-container-content">
          <h1>{props.heading1}</h1>
          <h3>{props.heading2}</h3>
        </div>
        {props.right && <img src={props.imgSrc} alt="tv" />}
      </div>
    </div>
  );
};

export default BoxDisplay;
