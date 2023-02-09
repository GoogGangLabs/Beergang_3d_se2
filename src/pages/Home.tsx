import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { HulkBuster } from "components";
import { ImagePlane, LightGroup } from "components/Common";
import beergangText from "assets/svg/beergang-text.svg";

const Home = () => {
  
  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }} camera={{ far: 30 }}>
        <color attach="background" args={["#111010"]} />
        <LightGroup/>
        <axesHelper scale={10}/>
        <OrbitControls/>
        {/* <ambientLight intensity={0.35} /> */}
        <ImagePlane position={[0, 0.9, 2.8]} args={[6.692, 1, 1]} scale={0.6} img={beergangText}/>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.15}>
            <Scroll html>
              <div className="text-[100px] text-white w-screen">
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
