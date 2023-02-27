import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CustomSpotLight } from "components";
import { useFrame } from "@react-three/fiber";
import { isFirstSceneState, pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { SpotLightHelper, Vector3 } from "three";
import { Sparkles, useHelper } from "@react-three/drei";
const LightGroup = () => {
  const scroll = useScroll();
  const bgLightRef = useRef<any>();
  const redLightRef = useRef<any>();
  const [intensity, setIntensity] = useState<number>(0);
  const isFirstScene = useRecoilValue(isFirstSceneState);
  const pageNum = useRecoilValue(pageNumState);

  useEffect(() => {
    // if (isFirstScene) {
    //   gsap.to(document.body.style, {
    //     background: "rgb(220,79,0)",
    //     duration: 3,
    //     ease: "power4.inOut",
    //   });
    //   gsap.to(camera.position, {
    //     x: 0,
    //     y: 0,
    //     z: 5,
    //     duration: 2,
    //     ease: "power4.inOut",
    //   });
    // }
  }, []);

  useFrame(() => {
    if (scroll.range(0, 2 / pageNum) < 1) {
      setIntensity(Math.max(Math.min(scroll.offset * pageNum, 1), 0));
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
      <spotLight
        position={[-4, 3, 5.7]}
        angle={0.7}
        penumbra={0.5}
        intensity={intensity}
      />
      <Sparkles
        color={"rgba(220, 79, 0, 1)"}
        count={30}
        size={1}
        speed={0.2}
        scale={2}
        opacity={intensity}
        noise={1}
        position={[0.5, 0, -0.7]}
      />
      <CustomSpotLight
        lightFrom={[0.3, 0, -0.5]}
        lightTo={[0.5, 0, -1]}
        angle={0.7}
        intensity={2}
        penumbra={1}
        lightColor="#421cff"
      />
      <CustomSpotLight
        lightFrom={[-0.3, 0, -0.5]}
        lightTo={[-0.6, 0, -1]}
        angle={0.7}
        intensity={3}
        penumbra={1}
        lightColor="#ff7e1b"
      />

      {/* <ambientLight intensity={0.1} /> */}
    </>
  );
};

export default LightGroup;
