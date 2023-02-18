import React, { useEffect, useRef, useState } from "react";
import exvideo from "assets/video/video1.mp4";
import videoMute from "assets/svg/video-mute.svg";
import videoUnmute from "assets/svg/video-unmute.svg";
import playButton from "assets/svg/play-button.svg";
import pauseButton from "assets/svg/pause-button.svg";
import videoFullscreen from "assets/svg/video-fullscreen.svg";

const Trailer = () => {
  const videoRef = useRef<any>();
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hover, setHover] = useState<string>("opacity-0");

  useEffect(() => {
    if(isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const onFullScreenHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }
  
  const hoverVideo = () => {
    setHover("opacity-100")
  }

  const unHoverVideo = () => {
    setHover(() => !isPlaying ? "opacity-100":"opacity-0")
  }



  return (
    <div className="absolute top-[400vh] w-full">
      <h3 className="text-[42px]">Page 5</h3>
      <div className="relative mx-auto pad:w-[clamp(917.18px,84.924vw,1467.49px)] desktop:w-[1467.49px] rounded-[20px]">
        {/* <h3  text-[40px] z-[3]">helloworld</h3> */}
        {isMuted ? (
          <img
            onClick={toggleMute}
            className="absolute pad:w-[clamp(50px,4.630vw,70px)] desktop:w-[70px] pad:bottom-[clamp(20px,1.852vw,38px)] desktop:bottom-[38px] pad:left-[clamp(21px,1.852vw,38px)] desktop:left-[38px] z-[2] hover:opacity-70 transition duration-[250ms] cursor-pointer"
            src={videoMute}
            alt="음소거해제"
          />
        ) : (
          <img
            onClick={toggleMute}
            className="absolute pad:w-[clamp(50px,4.630vw,70px)] desktop:w-[70px] pad:bottom-[clamp(20px,1.852vw,38px)] desktop:bottom-[38px] pad:left-[clamp(21px,1.852vw,38px)] desktop:left-[38px] z-[2] hover:opacity-70 transition duration-[250ms] cursor-pointer"
            src={videoUnmute}
            alt="음소거"
          />
        )}
        <img
          onClick={onFullScreenHandler}
          className="absolute pad:w-[clamp(50px,4.630vw,70px)] desktop:w-[70px] pad:bottom-[clamp(20px,1.852vw,38px)] desktop:bottom-[38px] pad:right-[clamp(20.18px,1.852vw,38px)] desktop:right-[38px] z-[2] hover:opacity-70 transition duration-[250ms] cursor-pointer"
          src={videoFullscreen}
          alt="전체화면"
        />
        {isPlaying ? (
          <img
            onClick={togglePlay}
            onMouseEnter={hoverVideo}
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[250ms] cursor-pointer ${hover}`}
            src={pauseButton}
            alt="정지 버튼"
          />
        ) : (
          <img
            onClick={togglePlay}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[250ms] cursor-pointer"
            src={playButton}
            alt="플레이 버튼"
          />
        )}
        <video
          onMouseEnter={hoverVideo}
          onMouseLeave={unHoverVideo}
          className="rounded-[20px] w-full"
          style={{ clipPath: "inset(1px 1px)" }}
          ref={videoRef}
          muted={isMuted}
          autoPlay={false}
          loop={true}
          controls={false}
        >
          <source src={exvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Trailer;
