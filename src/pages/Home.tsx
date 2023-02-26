import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import {
  Background,
  LightGroup,
  FadeOutSvg,
  HtmlContents,
  ImageCursor,
  CustomLoader,
} from "components";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import BeergangTest1 from "components/Model/BeergangTest1.jsx/BeergangTest1";
import {
  Scroll,
  ScrollControls,
} from "components/CustomScrollControls/CustomScrollControls";
import { BlendFunction, KernelSize, Resizer } from "postprocessing";

const Home = () => {

  return (
    <>
      <div className="w-screen h-screen">
        <Canvas
          className="fixed top-0 left-0 w-full h-full"
          gl={{ alpha: true, antialias: true }}
          // camera={{ fov: 100}}
          shadows
          dpr={1.4}
        >
          <Stats showPanel={0} />
          {/* <axesHelper scale={10} /> */}
          {/* <OrbitControls /> */}
          <Suspense>
            <ScrollControls pages={34} damping={0.25}>
              <FadeOutSvg />
              <LightGroup />
              <Background />
              <ImageCursor />
              <BeergangTest1 />
              <Scroll html>
                <HtmlContents />
              </Scroll>
            </ScrollControls>
            {/* <mesh ref={sunRef}>
              <sphereGeometry args={[1, 30, 30]} />
              <meshBasicMaterial color="#ffffff" transparent />
            </mesh>
            {sunRef.current && (
              <EffectComposer>
                <GodRays
                  sun={sunRef.current}
                  blendFunction={BlendFunction.SATURATION}
                  samples={100}
                  density={0.97}
                  decay={0.95}
                  weight={0.3}
                  exposure={0.6}
                  clampMax={1}
                  // width={Resizer.}
                  // height={Resizer.AUTO_SIZE}
                  kernelSize={KernelSize.SMALL}
                  blur={1}
                />
              </EffectComposer>
            )} */}
          </Suspense>
        </Canvas>
      </div>
      <CustomLoader />
    </>
  );
};

export default Home;
