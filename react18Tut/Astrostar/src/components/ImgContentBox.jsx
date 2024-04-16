import React from "react";

const ImgContentBox = (props) => {
  return (
    <div className="tv-container">
      <div className="tv-container-box">
        {!props.right && <img src={props.imgSrc} alt="tv" />}
        <div className="tv-container-content">
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
        </div>
        {props.right && <img src={props.imgSrc} alt="tv" />}
      </div>
    </div>
  );
};

export default ImgContentBox;
