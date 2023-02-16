import React, { useState } from "react";
import { CustomDirectionalLight, CustomSpotLight } from "components";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
const LightGroup = () => {
  const scroll = useScroll();
  const [intensity, setIntensity] = useState<number>(0);

  const pageNum = 5;
  useFrame(() => {
    // if (scroll.offset <= 0.1) {
    //   setIntensity((prev) => 0);
    // }
    if (scroll.offset < 1/pageNum) {
      setIntensity((prev) => Math.max(Math.min(scroll.offset * pageNum, 1), 0.05));
    }
  });

  return (
    <>
      {/* 비어갱을 비추는 스포트라이트 */}
      <CustomSpotLight
        lightFrom={[0, 2, -5]}
        lightTo={[0, 0, 10.3]}
        lightColor={"#FF5D00"}
        angle={0.3}
        intensity={0.8}
        penumbra={1}
      />
      {/* <CustomSpotLight
        lightFrom={[1.5, 2.2, 2]}
        lightTo={[0.75, 0.5, 3.6]}
        lightColor={"#5d6dff"}
        angle={0.22}
        intensity={4}
        penumbra={1}
      /> */}
      {/* 비어갱 텍스트 라이트 */}
      <CustomDirectionalLight
        lightFrom={[-1, 4, 5]}
        lightTo={[0, 2, 1]}
        intensity={intensity}
      />
      {/* <ambientLight intensity={intensity}/> */}
    </>
  );
};

export default LightGroup;
