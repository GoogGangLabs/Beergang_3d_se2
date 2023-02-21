import React, { useRef } from "react";
import bgMusic from "assets/mp3/bg-music.mp3";
import musicPlayer from "assets/svg/musicPlayer.svg";
import pauseMusicPlayer from "assets/svg/pause-musicPlayer.svg";
import { useRecoilState } from 'recoil';
import { toggleMusicState } from "store/atoms";
const BackgroundMusic = () => {
  const ref = useRef<any>();
  const [toggle, setToggle] = useRecoilState(toggleMusicState);
  
  const togglePlay = () => {

    if (ref.current.paused && toggle) {
      ref.current.play();
      setToggle(false)
    } else {
      ref.current.pause();
      setToggle(true)
    }
  };

  return (
    <div className="fixed bottom-[clamp(10px,2.778vw,20px)] pad:bottom-[clamp(20px,1.852vw,40px)] desktop:bottom-[clamp(40px,2.083vw,100vw)] left-[clamp(10px,2.778vw,30px)] pad:left-[clamp(30px,2.778vw,100px)] desktop:left-[clamp(100px,5.208vw,100vw)] z-[2]">
      <audio ref={ref} loop>
        <source src={bgMusic} type="audio/mp3" />
      </audio>
      <div
        onClick={togglePlay}
        className="relative w-[clamp(37.4px,10.389vw,60px)] pad:w-[clamp(60px,5.556vw,80px)] desktop:w-[clamp(80px,4.167vw,100vw)] aspect-[88/80] transition duration-[200ms] ease-in-out cursor-pointer"
        style={{
          transform: toggle ? "rotateX(0deg)" : "rotateX(180deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          className="absolute w-full h-full transition-all hover:opacity-70"
          src={musicPlayer}
          alt=""
          style={{ backfaceVisibility: "hidden" }}
        />
        <img
          className="absolute w-full h-full transition-all hover:opacity-70"
          src={pauseMusicPlayer}
          alt=""
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        />
      </div>
    </div>
  );
};

export default BackgroundMusic;
