import React from "react";

const ZodiacCard = ({ symbol, zodiacName }) => {
  const checkHoroscope = () => {
    //navigate to dail hororsope
  };

  return (
    <div className="zodiac-card">
      <div className="img">
        <img src={symbol} alt="img" draggable="false" />
      </div>
      <h2>{zodiacName}</h2>
      <button onClick={checkHoroscope}>Check </button>
    </div>
  );
};

export default ZodiacCard;
