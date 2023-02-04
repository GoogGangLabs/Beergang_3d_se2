import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Example, Rex } from "components";
import hello from "assets/lottie/hello.json";
import Group from "assets/svg/Group.svg";
import Lottie from "lottie-react";
import {
  Environment,
  Loader,
  MeshReflectorMaterial,
  Scroll,
  ScrollControls,
  Sparkles,
  Stars,
} from "@react-three/drei";

const Home = () => {
  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <fog />
        <color attach="background" args={["#111010"]} />
        <Stars
          radius={70}
          depth={20}
          count={500}
          factor={3}
          saturation={0}
          fade
          speed={0.4}
        />
        <Environment preset="city" />
        <ambientLight intensity={0.3} />
        <spotLight distance={70} angle={0.7} penumbra={0.2} intensity={2} />
        <Sparkles scale={[10, 10, 10]} size={2} color={"#fff"}/>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.25}>
            {/* <Example
              scale={7}
              position={[0, -8.5, 1]}
              rotation={[0, Math.PI, 0]}
              castShadow
            /> */}
            <Rex position={[1, -2.5, -0.3]} scale={0.4} />
            <Scroll html>
              <div className="text-[100px] text-white w-full">
                <Lottie
                  className="w-[60%]"
                  animationData={hello}
                  loop={false}
                  autoplay={true}
                />
                <div className="absolute top-[100vh] right-[10vw]">
                  <img className="w-[600px]" src={Group} alt="" />
                </div>
                <h1 className="absolute top-[200vh]">1</h1>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2.4, 0]}
          receiveShadow
        >
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            blur={3}
            resolution={2048}
            mixBlur={0.8}
            mixContrast={1}
            mixStrength={100}
            roughness={1}
            depthScale={1}
            color="#111010"
            metalness={0.9}
            mirror={0}
          />
        </mesh>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
