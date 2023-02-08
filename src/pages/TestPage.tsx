import {
  OrbitControls,
  ScrollControls, Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Test } from "components";
import React, { Suspense } from "react";

const TestPage = () => {
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
        
        <color attach="background" args={["#9a8b8b"]} />
        <Sparkles scale={[1000, 1000, 1000]} size={2} color={"#fff"} count={1000} />
        {/* <ambientLight intensity={1}/> */}
        {/* 3D 모델 */}
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.15}>
            <Test />
            {/* <Scroll html>
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
            </Scroll> */}
          </ScrollControls>
        </Suspense>
      </Canvas>
      {/* <Loader /> */}
    </>
  );
};

export default TestPage;
