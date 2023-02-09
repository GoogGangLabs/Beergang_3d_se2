import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { ImagePlane, LightGroup } from "components/Common";
import beergangText from "assets/svg/beergang-text.svg";
import { Beergang } from "components/Model";
import { DepthOfField, EffectComposer, SMAA, SSAO, Vignette } from "@react-three/postprocessing";

const Home = () => {
  
  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }} camera={{ far: 30 }}>
        <color attach="background" args={["#ff1b1b"]} />
        <LightGroup />
        <axesHelper scale={10} />
        <OrbitControls />
        {/* <ambientLight intensity={0.03} /> */}
        <ImagePlane
          position={[0, 1, 2.8]}
          args={[6.692, 1, 1]}
          scale={0.6}
          img={beergangText}
        />
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.15}>
            <Beergang position={[0, -1.6, 3.8]} />
            <Scroll html>
              <div className="text-[100px] text-white w-screen"></div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <EffectComposer>
          <SMAA />
          <Vignette
            offset={0.5}
            darkness={1}
            opacity={0.7}
            eskil={false}
          />
        </EffectComposer>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
