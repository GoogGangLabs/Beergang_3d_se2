import { useFrame } from "@react-three/fiber";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import React, { useRef } from "react";

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
    }
    else if (fadeIn <= 1 && !fadeOut && beforeFadeIn >= 1) {
      ref.current.style.opacity = fadeIn;
      ref.current.style.display = "block";
    } else if (fadeOut < 1 && beforeFadeIn >= 1) {
      ref.current.style.opacity = 1 - fadeOut;
      ref.current.style.display = "block";
    } else {
      ref.current.style.opacity = 0;
      ref.current.style.display = "none"
    }
  });

  return ref;
};

export default useScrollText;
