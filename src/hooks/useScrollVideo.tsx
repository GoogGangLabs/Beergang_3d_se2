import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import React, { useRef } from "react";

const useScrollVideo = (
  fadeInStart: number,
  fadeInRange: number,
  fadeOutStart: number,
  fadeOutRange: number
) => {
  const scroll = useScroll();
  const ref = useRef<any>();
  const { height } = useThree((state) => state.size);
  useFrame(() => {
    const beforeFadeIn = scroll.range(0, fadeInStart);
    const fadeIn = scroll.range(fadeInStart, fadeInRange);
    const fadeOut = scroll.range(fadeOutStart, fadeOutRange);
    if (fadeIn <= 1 && !fadeOut && beforeFadeIn >= 1) {

      // ref.current.style.top = `${}vh`
      // ref.current.style.transform = `translate3d(0
      // px,${height * -fadeIn}px,0)`;

      console.log(ref.current.style.transform);
      ref.current.style.opacity = 0
      ref.current.style.display = "block";
    } else if (fadeOut < 1 && beforeFadeIn >= 1) {
      // ref.current.style.transform = 1 - fadeOut;
      ref.current.style.display = "block";
    }
  });

  return ref;
};

export default useScrollVideo;
