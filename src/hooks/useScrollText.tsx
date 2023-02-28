import { useFrame } from "@react-three/fiber";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { sceneStartState } from "store/atoms";

const useScrollText = (
  fadeInStart: number,
  fadeInRange: number,
  fadeOutStart: number,
  fadeOutRange: number
) => {
  const scroll = useScroll();
  const ref = useRef<any>();

  useFrame(() => {
    const beforeFadeIn = scroll.range(0, fadeInStart);
    // console.log(beforeFadeIn)
    const fadeIn = scroll.range(fadeInStart, fadeInRange);
    const fadeOut = scroll.range(fadeOutStart, fadeOutRange);
  
    if (beforeFadeIn < 0.9 && ref.current.style.display !== "none") {
      ref.current.style.display = "none";
      ref.current.style.opacity = 0;
      ref.current.style.color="transparent";
      ref.current.style.textShadow = "0px 0px 4px rgba(255, 92, 0, 1)";
      ref.current.style.transform="translate3d(-5px,-5px,0px)";
    }
    else if (fadeIn <= 1 && !fadeOut && beforeFadeIn >= 1) {
      ref.current.style.opacity = fadeIn;
      ref.current.style.textShadow = `0px 0px ${(1-fadeIn) * 24}px rgba(255, 92, 0, 1)`;
      ref.current.style.transform = `translate3d(${-(1 - fadeIn) * 5}px,${-
        (1 - fadeIn) * 5
      }px,0)`;
      ref.current.style.display = "block";
    } else if (fadeOut < 1 && beforeFadeIn >= 1) {
      ref.current.style.opacity = 1 - fadeOut;
      ref.current.style.textShadow = `0px 0px ${(fadeOut) * 24}px rgba(255,92,0,1)`;
      ref.current.style.transform = `translate3d(${(fadeOut) * 5}px,${
        (fadeOut) * 5
      }px,0)`;
      ref.current.style.display = "block";
    } else {
      ref.current.style.textShadow = `0px 0px 0rem rgba(255, 92, 0, 1)`;
      ref.current.style.opacity = 0;
       ref.current.style.transform = `translate3d(0px,0px,0px)`;
      ref.current.style.display = "none"
    }
  });

  return ref;
};

export default useScrollText;
