import React from "react";
import Matthew from "../assets/cast/matthew.jpeg";
import Anne from "../assets/cast/anne.jpeg";
import Michael from "../assets/cast/Michael.jpeg";
import Mackanzie from "../assets/cast/Mackennzie.jpeg";

const Cast = () => {
  return (
    <div className="cast-container">
      <h3>Cast:</h3>
      <div className="casts">
        <img src={Matthew} alt="matthew" />
        <div className="cast-details">
          <h5>Matthew McConaughey</h5>
          <p>Cooper</p>
        </div>
      </div>
      <div className="casts">
        <img src={Mackanzie} alt="machanzie" />
        <div className="cast-details">
          <h5>Mackenzie</h5>
          <p>Murph</p>
        </div>
      </div>
      <div className="casts">
        <img src={Anne} alt="anne" />
        <div className="cast-details">
          <h5>Anne Hathaway</h5>
          <p>Brand</p>
        </div>
      </div>
      <div className="casts">
        <img src={Michael} alt="michael" />
        <div className="cast-details">
          <h5>Michael Caine</h5>
          <p>Proffessor Brand</p>
        </div>
      </div>
    </div>
  );
};

export default Cast;
