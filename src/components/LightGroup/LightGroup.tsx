import React, { useState } from "react";
import { CustomSpotLight } from "components";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { isFirstSceneState, pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";
const LightGroup = () => {
  const scroll = useScroll();
  const [intensity, setIntensity] = useState<number>(0);
  const isFirstScene = useRecoilValue(isFirstSceneState);
  const pageNum = useRecoilValue(pageNumState);

  useFrame(() => {
    // if (scroll.offset <= 0.1) {
    //   setIntensity((prev) => 0);
    // }
    if (scroll.offset < 1 / pageNum) {
      setIntensity(Math.max(Math.min(scroll.offset * pageNum, 1), 0.1));
    }
  });

  return (
    <>
      {/* 비어갱을 비추는 스포트라이트 */}
      {/* {isFirstScene ? (
        <>
          <CustomSpotLight
            lightFrom={[0.5, 0, 4.4]}
            lightTo={[0.5, -3, 4.7]}
            lightColor={"#ef510d"}
            angle={1}
            intensity={20}
            penumbra={1}
          />
        </>
      ) : (
        <></>
      )} */}
      {/* <CustomSpotLight
        lightFrom={[0, 2, 5.7]}
        lightTo={[0.3, 0, 4.7]}
        angle={1}
        penumbra={0.5}
        intensity={intensity}
      /> */}
      <CustomSpotLight
        lightFrom={[-4, 5, 4]}
        lightTo={[-4.8, -2, -6]}
        lightColor={"#3a15f3"}
        angle={1}
        intensity={1.5}
        penumbra={1}
      />
      <CustomSpotLight
        lightFrom={[4, 5, 4]}
        lightTo={[5, -3, -6]}
        lightColor={"#feaf7d"}
        angle={1}
        intensity={2}
        penumbra={1}
      />

      {/* 비어갱 텍스트 라이트 */}
      {/* <CustomDirectionalLight
        lightFrom={[-1, 4, 5]}
        lightTo={[0, 2, 1]}
        intensity={intensity}
      /> */}
      {/* <ambientLight intensity={0.1} /> */}
    </>
  );
};

export default LightGroup;
