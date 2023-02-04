import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Example } from "components";
import { OrbitControls, ScrollControls, Sky } from "@react-three/drei";

const Home = () => {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        shadows
      >
        <spotLight
          angle={0.14}
          color="#ffd0d0"
          penumbra={1}
          position={[25, 50, -20]}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
          castShadow
        />
        <Sky sunPosition={[2, 0.4, 10]} />
        <ambientLight intensity={0.3} />
        <ScrollControls pages={3}>
          <Example scale={7} position={[0,-8.5,1]} rotation={[0,Math.PI,0]}/>
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default Home;
