import React, { useEffect, useRef } from "react";
import bgMusic from "assets/mp3/bg-music.mp3";
import musicPlayer from "assets/svg/musicPlayer.svg";
const BackgroundMusic = () => {
  const ref = useRef<any>();

  const togglePlay = () => {
    if (ref.current.paused) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <div className="fixed pad:bottom-[clamp(20px,1.852vw,40px)] desktop:bottom-[40px] pad:left-[clamp(30px,2.778vw,100px)] desktop:left-[100px] z-[2]">
      <audio ref={ref} loop>
        <source src={bgMusic} type="audio/mp3" />
      </audio>
      <img
        onClick={togglePlay}
        className="pad:w-[clamp(60px,5.556vw,80px)] desktop:w-[80px] hover:opacity-70 transition duration-[200ms] ease-in-out cursor-pointer"
        src={musicPlayer}
        alt=""
      />
    </div>
  );
};

export default BackgroundMusic;
