import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Background,
  LightGroup,
  FadeOutSvg,
  HtmlContents,
  ImageCursor,
  CustomLoader,
} from "components";
import {
  EffectComposer,
} from "@react-three/postprocessing";
import BeergangTest1 from "components/Model/BeergangTest1.jsx/BeergangTest1";
import {
  Scroll,
  ScrollControls,
} from "components/CustomScrollControls/CustomScrollControls";
import { sceneStartState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { Perf } from "r3f-perf";

const Home = () => {
  const sceneStart = useRecoilValue(sceneStartState);
  const ref = useRef<any>();
  console.log(ref);
  return (
    <>
      <div className="w-screen h-screen">
        <Suspense>
        <Canvas
          ref={ref}
          className="fixed top-0 left-0 w-full h-full"
          gl={{ alpha: true, antialias: false }}
          // camera={{ fov: 70 }}
          performance={{ min: 0.6 }}
          // shadows
          dpr={1.2}
          >
          {/* <Stats showPanel={0} /> */}
          {/* <Perf /> */}
          {/* <AdaptiveDpr pixelated /> */}
          {/* <axesHelper scale={10} /> */}
          {/* <OrbitControls /> */}
            <ScrollControls
              pages={sceneStart ? 34 : 0}
              damping={0.3}
              enabled={sceneStart}
            >
              <ImageCursor />
              <FadeOutSvg />
              <LightGroup />
              <Background />
              <BeergangTest1 />
              <Scroll html>
                <HtmlContents />
              </Scroll>
            </ScrollControls>
            {/* <mesh ref={sunRef}>
              <sphereGeometry args={[1, 30, 30]} />
              <meshBasicMaterial color="#ffffff" transparent />
            </mesh> */}
          <EffectComposer>
            {/* <DepthOfField focusDistance={0} bokehScale={4} /> */}
          </EffectComposer>
        </Canvas>
          </Suspense>
      </div>
      <CustomLoader />
    </>
  );
};

export default Home;
