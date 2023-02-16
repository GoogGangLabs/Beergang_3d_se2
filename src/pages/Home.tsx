import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sparkles,
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
  Glitch,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";
import { NoToneMapping, Vector2 } from "three";
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
        // linear
      >
        <axesHelper scale={10} />
        <fog attach="fog" color="black" near={10} far={13} />
        <OrbitControls />
        {/* <ambientLight intensity={0.2} /> */}
        <Suspense fallback={null}>
          <ScrollControls pages={6} damping={0.1}>
            <FadeOutSvg />
            <LightGroup />
            <Background />
            <Sparkles
              color={"#FF5D00"}
              count={130}
              size={6}
              speed={0.4}
              scale={22}
              opacity={1}
            />
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
