import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
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
import {
  EffectComposer,
  Glitch,
  Vignette,
} from "@react-three/postprocessing";
import { Vector2 } from "three";
import { GlitchMode } from "postprocessing";

const Home = () => {
  const [imageVisible, setImageVisible] = useState<number>(0);

  const getImageIndex = (index: number) => {
    setImageVisible(index);
  };

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", zIndex: 1 }}
        gl={{ antialias: true }}
        shadows
        // linear
      >
        <axesHelper scale={10} />

        {/* <OrbitControls /> */}

        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.1}>
            <FadeOutSvg />
            <LightGroup />
            <Background />
            <ImageCursor imageVisible={imageVisible} />
            {/* <WaveEffect /> */}
            {/* <WaveCursor /> */}
            {/* <BeergangTest position={[0, -0.6, 4.2]} /> */}
            <Beergang
              position={[0, -1.65, 4.2]}
              // rotation={[Math.PI / 64, -Math.PI / 10, 0]}
            />
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
    </>
  );
};

export default Home;
