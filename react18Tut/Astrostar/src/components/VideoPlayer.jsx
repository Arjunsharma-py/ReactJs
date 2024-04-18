import React, { useRef, useState } from "react";
import intersteller from "../assets/video/intersteller.mp4";

const VideoPlayer = ({ playerObj, setPlayerObj }) => {
  const videoRef = useRef();

  const handlePlay = () => {
    setPlayerObj(true, videoRef.current.currentTime);
  };

  const handlePause = () => {
    setPlayerObj(false, videoRef.current.currentTime);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={intersteller}
        controls
        autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default VideoPlayer;
