import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Example } from "components";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Home = () => {

  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        shadows
        camera={{position:[0.4,6,0.6]}}
      >
        <ambientLight intensity={0.3}/>
        <Example scale={2.5}/>
      </Canvas>
    </Suspense>
  );
};

export default Home;
