import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import VideoPlayer from "../components/VideoPlayer";
import SwitchBox from "../components/SwitchBox";

const SigninPage = () => {
  const [playerObj, setPlayerObj] = useState({
    isPlaying: false,
    currentTime: 0,
  });

  return (
    <>
      <Header />
      <div className="bg-img-signin bg-img-common">
        <VideoPlayer
          playerObj={playerObj}
          setPlayerObj={(isPlaying, currentTime) =>
            setPlayerObj({ isPlaying, currentTime })
          }
        />
        <div className="video-details">
          {!playerObj.isPlaying && <SwitchBox />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninPage;
