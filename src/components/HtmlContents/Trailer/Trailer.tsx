import React, { useEffect, useRef, useState } from "react";
import exvideo from "assets/video/video.mp4";
import videoMute from "assets/svg/video-mute.svg";
import videoUnmute from "assets/svg/video-unmute.svg";
import playButton from "assets/svg/play-button.svg";
import pauseButton from "assets/svg/pause-button.svg";
import videoFullscreen from "assets/svg/video-fullscreen.svg";
import { useScrollVideo } from "hooks";
import { useRecoilValue } from "recoil";
import { pageNumState } from "store/atoms";

const Trailer = () => {
  const videoRef = useRef<any>();
  const pageNum = useRecoilValue(pageNumState);
  const ref = useScrollVideo(
    17 / pageNum,
    2 / pageNum,
    19.5 / pageNum,
    2 / pageNum
  );
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hover, setHover] = useState<string>("opacity-0");

  useEffect(() => {
    let t:any;
    if (isPlaying) {
      videoRef.current.play();
      t = setTimeout(() => {
        setHover("opacity-0")
      },1000)
    } else {
      videoRef.current.pause();
    }
    return () => clearTimeout(t)
  }, [isPlaying, hover]);

  const onFullScreenHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const hoverVideo = () => {
    setHover("opacity-100");
  };

  const unHoverVideo = () => {
    setHover(() => (!isPlaying ? "opacity-0" : "opacity-0"));
  };

  return (
    <div
      ref={ref}
      // className="absolute top-[35.938vh] pad:top-[17.448vh] desktop:top-[113.611vh] w-full"
      className="flex justify-center items-center"
    >
      <div className="relative mx-auto w-[clamp(330px,91.667vw,917.18px)] pad:w-[clamp(917.18px,84.924vw,1467.49px)] desktop:w-[clamp(1467.49px,76.432vw,100vw)] rounded-[20px] aspect-[917.18/500]">
        <div className="absolute flex justify-center items-center w-[clamp(30.8px,8.556vw,55px)] pad:w-[clamp(55px,5.093vw,77px)] desktop:w-[clamp(77px,4.010vw,100vw)] h-[clamp(28px,7.778vw,50px)] pad:h-[clamp(50px,4.630vw,70px)] desktop:h-[clamp(70px,3.646vw,100vw)] bottom-[clamp(7px,1.944vw,20px)] pad:bottom-[clamp(20px,1.852vw,31px)] desktop:bottom-[clamp(31px,1.615vw,100vw)] left-[clamp(7px,1.944vw,21px)] pad:left-[clamp(21px,1.944vw,33px)] desktop:left-[clamp(33px,1.719vw,100vw)] skew-x-[-7deg] bg-[rgba(0,0,0,0.8)] rounded-[3px] z-[3]">
          {isMuted ? (
            <img
              onClick={toggleMute}
              className="w-[clamp(11.9px,3.306vw,21.25px)] pad:w-[clamp(21.25px,1.968vw,29.5px)] desktop:w-[clamp(29.75px,1.549vw,100vw)] skew-x-[7deg] hover:opacity-70 transition duration-[250ms] cursor-pointer"
              src={videoMute}
              alt="음소거해제"
            />
          ) : (
            <img
              onClick={toggleMute}
              className="w-[clamp(11.9px,3.306vw,21.25px)] pad:w-[clamp(21.25px,1.968vw,29.5px)] desktop:w-[clamp(29.75px,1.549vw,100vw)] skew-x-[7deg] hover:opacity-70 transition duration-[250ms] cursor-pointer"
              src={videoUnmute}
              alt="음소거"
            />
          )}
        </div>
        <div className="absolute flex justify-center items-center w-[clamp(30.8px,8.556vw,55px)] pad:w-[clamp(55px,5.093vw,77px)] desktop:w-[clamp(77px,4.010vw,100vw)] h-[clamp(28px,7.778vw,50px)] pad:h-[clamp(50px,4.630vw,70px)] desktop:h-[clamp(70px,3.646vw,100vw)] bottom-[clamp(7px,1.944vw,20px)] pad:bottom-[clamp(20px,1.852vw,31px)] desktop:bottom-[clamp(31px,1.615vw,100vw)] right-[clamp(7px,1.944vw,21px)] pad:right-[clamp(21px,1.944vw,33px)] desktop:right-[clamp(33px,1.719vw,100vw)] skew-x-[-7deg] bg-[rgba(0,0,0,0.8)] rounded-[3px] z-[3]">
          <img
            onClick={onFullScreenHandler}
            className="w-[clamp(11.9px,3.306vw,21.25px)] pad:w-[clamp(21.25px,1.968vw,29.5px)] desktop:w-[clamp(29.75px,1.549vw,100vw)] skew-x-[7deg] hover:opacity-70 transition duration-[250ms] cursor-pointer"
            src={videoFullscreen}
            alt="전체화면"
          />
        </div>
        {isPlaying ? (
          <img
            onClick={togglePlay}
            onMouseEnter={hoverVideo}
            className={`absolute w-[clamp(59.6px,16.556vw,140px)] pad:w-[clamp(140px,12.963vw,180px)] desktop:w-[clamp(180px,9.375vw,100vw)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[250ms] cursor-pointer ${hover}`}
            src={pauseButton}
            alt="정지 버튼"
          />
        ) : (
          <img
            onClick={togglePlay}
            className="absolute w-[clamp(59.6px,16.556vw,140px)] pad:w-[clamp(140px,12.963vw,180px)] desktop:w-[clamp(180px,9.375vw,100vw)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] transition duration-[250ms] cursor-pointer"
            src={playButton}
            alt="플레이 버튼"
          />
        )}
        <video
          onMouseMove={hoverVideo}
          onMouseLeave={unHoverVideo}
          onClick={togglePlay}
          className="rounded-[20px] w-full"
          style={{ clipPath: "inset(1px 1px)" }}
          ref={videoRef}
          muted={isMuted}
          autoPlay={false}
          loop={false}
          controls={false}
        >
          <source src={exvideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Trailer;
