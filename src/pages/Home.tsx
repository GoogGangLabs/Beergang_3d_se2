import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import {
  Background,
  LightGroup,
  FadeOutSvg,
  HtmlContents,
  ImageCursor,
} from "components";
import { Beergang } from "components/Model";
import { EffectComposer, Glitch, Vignette } from "@react-three/postprocessing";
import { Vector2 } from "three";
import { GlitchMode } from "postprocessing";
import TestShader from "components/TestShader/TestShader";

const Home = () => {
  const [imageVisible, setImageVisible] = useState<number>(0);

  const getImageIndex = (index: number) => {
    setImageVisible(index);
  };

  return (
    <>
      <div className="w-screen h-screen">
        <Canvas
          className="fixed top-0 left-0 w-full h-full z-[1]"
          gl={{ antialias: true, alpha: true }}
          shadows
          // linear
        >
          {/* <axesHelper scale={10} /> */}
          <TestShader />
          {/* <OrbitControls /> */}

          <Suspense fallback={null}>
            <ScrollControls pages={13} damping={0.15}>
              <FadeOutSvg />
              <LightGroup />
              <Background />
              <ImageCursor imageVisible={imageVisible} />
              {/* <WaveEffect /> */}
              {/* <WaveCursor /> */}
              <Beergang position={[0, -1.65, 4.2]} />
              <Scroll html>
                <HtmlContents getImageIndex={getImageIndex} />
              </Scroll>
            </ScrollControls>
          </Suspense>
          <EffectComposer>
            <Glitch
              delay={new Vector2(0, 0)}
              active={false}
              // mode={GlitchMode.CONSTANT_WILD}
            />
            <Vignette offset={0.65} darkness={1} opacity={0.4} eskil={false} />
          </EffectComposer>
        </Canvas>
        <Loader />
      </div>
    </>
  );
};

export default Home;
