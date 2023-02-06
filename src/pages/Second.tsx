import {
  Float,
  Html,
  Scroll,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HulkBuster2 } from "components";
import React, { Suspense } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { EffectComposer, Glitch, Scanline } from "@react-three/postprocessing";
import { Vector2 } from "three";
import Group from "assets/svg/Group.svg";
import tryit from "assets/lottie/try.json";
import Lottie from "lottie-react";

const DynamicBackground = () => {
  return <color attach="background" args={["#0c0b0b"]} />;
};

const Second = () => {
  return (
    <>
      <Canvas
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <DynamicBackground/>
        {/* <directionalLight
          position={[0, 3, 3]}
          target-position={[0, -10, -3]}
          intensity={1}
          color="blue"
        /> */}
        <directionalLight
          position={[2, -3, 0]}
          target-position={[-3, 0, 0]}
          intensity={3}
          color={"skyblue"}
        />
        <ambientLight intensity={0.01} />
        <pointLight position={[-5, 1, -2]} intensity={0.2} color={"white"} />
        <Sparkles scale={[50, 50, 50]} size={2} color={"#fff"} count={1000} />
        {/* 3D 모델 */}
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.15}>
            <Float
              speed={4}
              rotationIntensity={0.3}
              floatIntensity={0.5}
              floatingRange={[-0.3, -0.1]}
            >
              <HulkBuster2
                position={[-1.5, 0, 0]}
                rotation={[degToRad(-90), 0, degToRad(-90)]}
                scale={1}
              />
            </Float>
            <Scroll html>
              <div className="relative text-[100px] text-white w-screen">
                <div className="absolute top-[-10vh] left-[0]">
                  <Lottie
                    className="h-[80%]"
                    animationData={tryit}
                    loop={false}
                    autoplay={true}
                  />
                </div>
                <div className="absolute top-[110vh] right-[30vw] z-[0]">
                  <img className="w-[700px]" src={Group} alt="" />
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <EffectComposer>
          <Glitch
            delay={new Vector2(3, 5)}
            duration={new Vector2(0.3, 0.6)}
            strength={new Vector2(0.2, 0.5)}
            ratio={1}
          />
          {/* <Scanline density={2}/> */}
        </EffectComposer>
      </Canvas>
      {/* <Loader /> */}
    </>
  );
};

export default Second;
