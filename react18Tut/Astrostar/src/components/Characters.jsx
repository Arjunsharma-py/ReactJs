import React from "react";
import Matthew from "../assets/cast/matthew.jpeg";
import Anne from "../assets/cast/anne.jpeg";

const Characters = () => {
  return (
    <div className="char-container">
      <h3>Characters:</h3>
      <div className="casts">
        <img src={Matthew} alt="matthew" />
        <div className="cast-details">
          <h5>Matthew McConaughey</h5>
          <p>Cooper</p>
        </div>
      </div>
      <div className="casts">
        <img src={Anne} alt="anne" />
        <div className="cast-details">
          <h5>Anne Hathaway</h5>
          <p>Brand</p>
        </div>
      </div>
    </div>
  );
};

export default Characters;
