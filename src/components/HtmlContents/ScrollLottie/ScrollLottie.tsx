import React, { useState } from 'react'
import Lottie from "lottie-react";
import ScrollDownLottie from "assets/json/ScrollDown.json";
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const pageNum = 12;

const ScrollLottie = () => {
  const scroll = useScroll();
  const [opacity, setOpacity] = useState<string>("opacity-100");
  useFrame(() => {
    if (scroll.range(0, 1/pageNum) >= 0.05) {
      setOpacity("opacity-0")
    } else {
      setOpacity("opacity-100")
    }
  })
  return (
    <div
      className={`hidden pad:flex justify-center items-end relative h-screen transition duration-[350ms] ${opacity}`}
    >
      <Lottie
        className="hidden pad:block pad:w-[clamp(64px,5.926vw,80px)] desktop:w-[clamp(80px,4.167vw,100vw)] pad:mb-[clamp(10px,0.926vw,19px)] desktop:mb-[clamp(19px,0.990vw,100vw)]"
        animationData={ScrollDownLottie}
        loop
        autoPlay={true}
      />
    </div>
  );
}

export default ScrollLottie