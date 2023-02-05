import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Example, HulkBuster, Rex } from "components";
import tryit from "assets/lottie/try.json";
import twitter from "assets/svg/twitter.svg";
import discord from "assets/svg/discord.svg";
import beer from "assets/svg/beer.svg";
import Group from "assets/svg/Group.svg";
import Lottie from "lottie-react";
import {
  Center,
  Environment,
  Float,
  Image,
  Loader,
  MeshReflectorMaterial,
  Scroll,
  ScrollControls,
  Sparkles,
  Svg,
  Text3D,
} from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import { ImageLoader, TextureLoader } from "three";

const Home = () => {
  const img = useLoader(TextureLoader, beer);

  return (
    <>
      <Canvas style={{ width: "100%", height: "100vh" }} camera={{ far: 30 }}>
        <fog attach="fog" color="black" near={0} far={8} />
        <color attach="background" args={["#111010"]} />
        {/* <Stars
          radius={70}
          depth={100}
          count={500}
          factor={3}
          saturation={0}
          fade
          speed={1}
        /> */}
        <directionalLight position={[-10, 10, 5]}/>
        <Environment preset="city" />
        <ambientLight intensity={0.35} />
        <spotLight distance={70} angle={0.7} penumbra={0.2} intensity={2} />
        <Sparkles scale={[50, 50, 50]} size={5} color={"#fff"} count={1000} />
        {/* 3D 텍스트 */}
        <Center
          position={[-0.2, 0.3, -16]}
          rotation={[degToRad(10), degToRad(5), 0]}
        >
          <Float
            speed={4}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            floatingRange={[-0.2, -0.1]}
          >
            <Text3D
              size={0.11}
              lineHeight={0.7}
              letterSpacing={0.01}
              bevelEnabled={true}
              bevelThickness={0.03}
              bevelSize={0.005}
              bevelOffset={0.002}
              font={require("../assets/font/Anton_Regular.json")}
            >
              {`Would you like to\nhave a drink?`}
              <MeshReflectorMaterial mirror={0} color="#FF6700" />
            </Text3D>
          </Float>
        </Center>
        {/* Beer 이미지 */}
        <Float
          speed={4}
          rotationIntensity={0.01}
          floatIntensity={0.4}
          floatingRange={[-0.1, -0.0]}
        >
          <mesh position={[0.65, 0.1, -15.8]} scale={0.26}>
            <planeBufferGeometry args={[2.39, 3.18, 1, 1]} />
            <MeshReflectorMaterial mirror={0} map={img} transparent />
          </mesh>
        </Float>
        {/* 3D 모델 */}
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.15}>
            <Rex position={[1, -2.5, -0.3]} scale={0.4} />
            <Float
              speed={4}
              rotationIntensity={0.2}
              floatIntensity={0.5}
              floatingRange={[-0.3, -0.1]}
            >
              <HulkBuster position={[-1, -1.7, -7]} scale={0.9} />
            </Float>
            <Scroll html>
              <div className="text-[100px] text-white w-screen">
                <div className="relative top-[0] left-[0]">
                  <Lottie
                    className="h-[80%]"
                    animationData={tryit}
                    loop={false}
                    autoplay={true}
                  />
                </div>
                <div className="absolute top-[110vh] right-[10vw]">
                  <img className="w-[800px]" src={Group} alt="" />
                </div>
                <div className="absolute top-[252vh] left-[15vw]">
                  <p className="text-[32px] leading-[150%] font-poppins">
                    Join our server to benefit from giveaways and many
                    <br />
                    other priviledges.
                  </p>
                  <div className="flex mt-[50px] gap-x-[30px] font-poppins text-white text-[20px]">
                    <div className="flex gap-x-[10px] w-[260px] h-[68px] bg-[#4FA5F1] justify-center items-center cursor-pointer hover:bg-[#1688eb] transition delay-[100ms]">
                      Join Twitter
                      <img src={twitter} alt="" />
                    </div>
                    <div className="flex gap-x-[10px] w-[260px] h-[68px] bg-[#5B68EA] justify-center items-center cursor-pointer hover:bg-[#3b49e7] transition delay-[100ms]">
                      Join Discord
                      <img src={discord} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
        {/* 바닥 */}
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
