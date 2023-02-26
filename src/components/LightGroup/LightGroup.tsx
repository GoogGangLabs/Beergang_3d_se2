import React, { useEffect, useRef, useState } from "react";
import { CustomSpotLight } from "components";
import { useFrame } from "@react-three/fiber";
import { isFirstSceneState, pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { SpotLightHelper, Vector3 } from "three";
import { useHelper } from "@react-three/drei";
const LightGroup = () => {
  const scroll = useScroll();
  const bgLightRef = useRef<any>();
  const [intensity, setIntensity] = useState<number>(0);
  const isFirstScene = useRecoilValue(isFirstSceneState);
  const pageNum = useRecoilValue(pageNumState);
  useHelper(bgLightRef, SpotLightHelper);
  useEffect(() => {
    bgLightRef.current.lookAt(0, 0, 1);
  }, []);

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
  },[])

  useFrame(() => {
    if (scroll.range(0, 2/pageNum) < 1) {
      setIntensity(Math.max(Math.min(scroll.offset * pageNum, 1), 0.05));
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
      <CustomSpotLight
        lightFrom={[-4, 3, 5.7]}
        lightTo={[0.3, 0, 4.7]}
        angle={0.7}
        penumbra={0.5}
        intensity={intensity}
      />
      <spotLight
        ref={bgLightRef}
        angle={1}
        intensity={4}
        penumbra={1}
        color="#2b00ff"
        position={[0, 0, 2]}
      />
      {/* <CustomSpotLight
        lightFrom={[2, 1, 5]}
        lightTo={[5, 2, 0]}
        lightColor={"#ff7e1b"}
        angle={1}
        intensity={4}
        penumbra={1}
      /> */}

      {/* <ambientLight intensity={0.1} /> */}
    </>
  );
};

export default LightGroup;
