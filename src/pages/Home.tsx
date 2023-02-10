import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  Svg,
} from "@react-three/drei";
import { Background, LightGroup, ReflectiveSvg, FadeOutSvg } from "components";
import { Beergang } from "components/Model";
import { EffectComposer, SMAA, Vignette } from "@react-three/postprocessing";

const Home = () => {
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
            <Beergang position={[0, -1.6, 3.8]} />
            <Scroll html>
              <div className="text-white w-screen">
                {/* 페이지 2 100vh ~ 200vh */}
                <div className="absolute top-[100vh] left-[60vw] w-[520px]">
                  <h3 className="text-[42px]">Web3 Avatar Communication</h3>
                  <h4 className="text-[18px] mt-[30px] leading-[150%]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat soluta aperiam ullam qui at iure rerum neque
                    voluptatum sunt, eos quas beatae eaque commodi vero illum
                    deserunt incidunt magnam esse?
                  </h4>
                </div>
                {/* 페이지 3 200vh ~ 300vh */}
                <div className="absolute top-[200vh] left-[10vw]">
                  <h3 className="text-[42px]">Web3 Avatar Communication</h3>
                  <h4 className="text-[18px] mt-[30px] leading-[150%]">
                    Lorem, ipsum
                  </h4>
                </div>
                {/* 페이지 4 300vh ~ 400vh */}
                <div className="absolute top-[300vh] left-[10vw]">
                  <h3 className="text-[42px]">Page 4</h3>
                  <h4 className="text-[18px] mt-[30px] leading-[150%]">
                    Lorem, ipsum
                  </h4>
                </div>
                {/* 페이지 5 400vh ~ 500vh */}
                <div className="absolute top-[400vh] left-[10vw]">
                  <h3 className="text-[42px]">Page 5</h3>
                  <h4 className="text-[18px] mt-[30px] leading-[150%]">
                    Lorem, ipsum
                  </h4>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <EffectComposer>
          <SMAA />
          <Vignette offset={0.65} darkness={1} opacity={0.5} eskil={false} />
        </EffectComposer>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
