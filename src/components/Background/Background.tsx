import { MeshReflectorMaterial, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useState } from "react";
import { DoubleSide, MathUtils } from "three";

const Background = () => {
  const scroll = useScroll();
  const [rgb, setRgb] = useState<string>("rgb(0, 0, 0)");
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R:number = 220;
  const G: number = 79;
  const B: number = 0;
  const pageNum: number = 5;

  useFrame((state, delta) => {
    // setRgb(
    //   (prev) =>
    //     `rgb(${Math.max(
    //       Math.ceil((1 - scroll.offset * pageNum * 2) * R),
    //       0
    //     )},${Math.max(
    //       Math.ceil((1 - scroll.offset * pageNum * 2) * G),
    //       0
    //     )},${Math.max(Math.ceil((1 - scroll.offset * pageNum) * B), 0)})`
    // );
  });
  return (
    <>
      <color attach="background" args={[rgb]} />
      {/* 바닥 재질 */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.68, 4.5]}
        receiveShadow
      >
        <planeGeometry args={[10, 3]} />
        <MeshReflectorMaterial
          blur={[300, 0]}
          resolution={1024}
          mixBlur={0.5}
          mixContrast={0.7}
          depthScale={0.1}
          roughness={1}
          mirror={0}
          // blur={3}
          // resolution={2048}
          // mixBlur={0.94}
          // mixContrast={1}
          // mixStrength={30}
          // roughness={1}
          // depthScale={0.3}
          // metalness={0.9}
          // mirror={0}
        />
        {/* <meshPhongMaterial /> */}
        {/* <fog attach="fog" color="black" near={5} far={6} /> */}
      </mesh>
    </>
  );
};

export default Background;
