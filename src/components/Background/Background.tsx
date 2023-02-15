import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useState } from "react";
import { MathUtils } from "three";

const Background = () => {
  const scroll = useScroll();
  const [rgb, setRgb] = useState<string>("rgb(255, 103, 0)");
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R:number = 220;
  const G: number = 79;
  const B: number = 0;
  const pageNum: number = 5;

  useFrame((state, delta) => {
    setRgb(
      (prev) =>
        `rgb(${Math.max(
          Math.ceil((1 - scroll.offset * pageNum * 2) * R),
          0
        )},${Math.max(
          Math.ceil((1 - scroll.offset * pageNum * 2) * G),
          0
        )},${Math.max(Math.ceil((1 - scroll.offset * pageNum) * B), 0)})`
    );
  });
  return (
    <>
      <color attach="background" args={[rgb]} />
    </>
  );
};

export default Background;
