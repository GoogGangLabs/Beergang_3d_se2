import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  Svg,
} from "@react-three/drei";
import {
  Background,
  LightGroup,
  ReflectiveSvg,
  FadeOutSvg,
  WaveCursor,
  WaveEffect,
  HtmlContents,
  ImageCursor,
} from "components";
import { Beergang } from "components/Model";
import {
  Bloom,
  EffectComposer,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";

const Home = () => {
  const [imageVisible, setImageVisible] = useState<number>(0);

  const getImageIndex = (index:number) => {
    setImageVisible(index);
  }

  return (
      <>
        <Canvas style={{ width: "100vw", height: "100vh" }}>
          <axesHelper scale={10} />
          <fog attach="fog" color="black" near={11} far={16} />
          {/* <OrbitControls /> */}
          {/* <ambientLight intensity={0.2} /> */}
          <Suspense fallback={null}>
            <ScrollControls pages={6} damping={0.1}>
              <FadeOutSvg />
              <LightGroup />
              <Background />
              {/* <WaveEffect /> */}
              {/* <WaveCursor /> */}
              <ImageCursor imageVisible={imageVisible}/>
              <Beergang position={[0, -1.6, 3.8]} />
              <Scroll html>
                <HtmlContents getImageIndex={getImageIndex}/>
              </Scroll>
            </ScrollControls>
          </Suspense>
          <EffectComposer>
            <SMAA />
            <Vignette offset={0.65} darkness={1} opacity={0.4} eskil={false} />
          </EffectComposer>
        </Canvas>
        <Loader />
      </>
  );
};

export default Home;
