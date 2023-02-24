import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Stats,
} from "@react-three/drei";
import {
  Background,
  LightGroup,
  FadeOutSvg,
  HtmlContents,
  ImageCursor,
  CustomLoader,
} from "components";
import { Beergang } from "components/Model";
import { EffectComposer, Glitch, Vignette } from "@react-three/postprocessing";
import { Vector2 } from "three";
import { GlitchMode } from "postprocessing";
import BeergangTest1 from "components/Model/BeergangTest1.jsx/BeergangTest1";

const Home = () => {
  const [imageVisible, setImageVisible] = useState<number>(0);

  const getImageIndex = (index: number) => {
    setImageVisible(index);
  };

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
          {/* <TestShader /> */}
          {/* <axesHelper scale={10} /> */}
          {/* <OrbitControls /> */}
          <Suspense>
            <ScrollControls pages={13} damping={0.15}>
              <FadeOutSvg />
              <LightGroup />
              <Background />
              <ImageCursor imageVisible={imageVisible} />
              <BeergangTest1 />
              {/* <Beergang position={[0, -1.65, 4.2]} /> */}
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
            {/* <Vignette offset={0.85} darkness={1} opacity={0.4} eskil={false} /> */}
          </EffectComposer>
        </Canvas>
      </div>
      <CustomLoader />
    </>
  );
};

export default Home;
