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
import { DepthOfField, EffectComposer, Noise } from "@react-three/postprocessing";
import BeergangTest1 from "components/Model/BeergangTest1.jsx/BeergangTest1";
import {
  Scroll,
  ScrollControls,
} from "components/CustomScrollControls/CustomScrollControls";
import { sceneStartState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { Perf } from "r3f-perf";
import { OrbitControls, Preload, Stats } from "@react-three/drei";
import Beergang from '../components/Model/Beergang/Beergang';
import { BlendFunction } from "postprocessing";

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
            gl={{ alpha: true, antialias: true }}
            // camera={{ fov: 70 }}
            performance={{ min: 0.6 }}
            shadows
            dpr={1.2}
            // camera={{position:[0,0,0]}}
          >
            <Stats showPanel={0} />
            {/* <Perf /> */}
            {/* <AdaptiveDpr pixelated /> */}
            {/* <axesHelper scale={10} /> */}
            {/* <OrbitControls /> */}
            <Preload all />
            <ScrollControls
              pages={sceneStart ? 34 : 0}
              damping={0.18}
              enabled={sceneStart}
            >
              {/* <ImageCursor /> */}
              <FadeOutSvg />
              <LightGroup />
              <Background />
              <Beergang scale={0.5} position={[-0.04, -8, -5]} />
              {/* <BeergangTest1 /> */}
              <Scroll html>
                <HtmlContents />
              </Scroll>
            </ScrollControls>
            <EffectComposer>
              <DepthOfField focusDistance={0.00} bokehScale={4} focalLength={0.03}/>
              
              {/* <Noise premultiply blendFunction={BlendFunction.ADD} /> */}
            </EffectComposer>
          </Canvas>
        </Suspense>
      </div>
      <CustomLoader />
    </>
  );
};

export default Home;
