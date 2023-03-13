import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import ScrollDownLottie from "assets/json/ScrollDown.json";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";

const ScrollLottie = () => {
  const scroll = useScroll();
  const opacityRef = useRef<any>();
  const pageNum = useRecoilValue(pageNumState);

  useFrame(() => {
    if (scroll.range(0, 1 / pageNum) >= 0.1 && opacityRef.current.style.opacity === "1") {
      opacityRef.current.style.opacity = 0
    } else if (scroll.range(0, 1 / pageNum) < 0.1 && (opacityRef.current.style.opacity === "0" || !opacityRef.current.style.opacity)) {
      opacityRef.current.style.opacity = 1;
    }
  });
  return (
    <div
      ref={opacityRef}
      className={`hidden pad:flex justify-center items-end relative h-screen transition duration-[350ms]`}
    >
      <Lottie
        className="hidden pad:block pad:w-[clamp(64px,5.926vw,80px)] desktop:w-[clamp(80px,4.167vw,100vw)] pad:mb-[clamp(10px,0.926vw,19px)] desktop:mb-[clamp(19px,0.990vw,100vw)]"
        animationData={ScrollDownLottie}
        loop
        autoPlay={true}
      />
    </div>
  );
};

export default ScrollLottie;
