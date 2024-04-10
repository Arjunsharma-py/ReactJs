import React from "react";
import chat from "../assets/chat.png";
import call from "../assets/call.png";
import video from "../assets/video.png";

const Services = () => {
  const handleClick = () => {
    //navigate to
  };

  return (
    <div className="services">
      <div className="services-bg">
        <div className="services-box">
          <button className="img-box" onClick={handleClick}>
            <img src={call} alt="call" />
          </button>
          <span>Call</span>
        </div>
        <div className="services-box">
          <button className="img-box" onClick={handleClick}>
            <img src={chat} alt="chat" />
          </button>
          <span>Chat</span>
        </div>
        <div className="services-box">
          <button className="img-box" onClick={handleClick}>
            <img src={video} alt="video" />
          </button>
          <span>Video</span>
        </div>
        <div className="services-box">
          <button className="img-box" onClick={handleClick}>
            <img src={call} alt="report" />
          </button>
          <span>Detail Report</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
