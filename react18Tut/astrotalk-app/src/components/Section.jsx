import React from "react";
import frontImage from "../assets/arjun-kapoor-uhd.webp";

const Section = () => {
  return (
    <div className="section-bg">
      <div className="intro-container">
        <div className="intro-image">
          <img src={frontImage} alt="photo" />
        </div>
        <div className="intro-chat">
          <h2>Demo Text</h2>
          <h1>Chat with Astrologer</h1>
          <button type="button">Chat Now</button>
        </div>
        <div className="intro-chat-option"></div>
      </div>
    </div>
  );
};

export default Section;
