import { MeshReflectorMaterial, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useState } from "react";
import { DoubleSide, MathUtils } from "three";
import { degToRad } from "three/src/math/MathUtils";

const Background = () => {
  const scroll = useScroll();
  const [rgb, setRgb] = useState<string>("rgb(0, 0, 0)");
  const [isCloseFog, setIsCloseFog] = useState<boolean>(false);
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R:number = 220;
  const G: number = 79;
  const B: number = 0;
  const pageNum: number = 5;

  useFrame((state, delta) => {
    setRgb(
      (prev) =>
        `rgb(${Math.max(
          Math.ceil((1 - scroll.offset * pageNum * 2) * R),
          0
        )},${Math.max(
          Math.ceil((1 - scroll.offset * pageNum * 2) * G),
          0
        )},${Math.max(Math.ceil((1 - scroll.offset * pageNum) * B), 0)})`
    );
    if (scroll.offset >= 0.4) {
      setIsCloseFog(true)
    } else {
      setIsCloseFog(false)
    }
  });
  return (
    <>
      <color attach="background" args={[rgb]} />
      {isCloseFog ? (
        <fog attach="fog" color="black" near={1.4} far={3.3} />
        ) : (
          <fog attach="fog" color="black" near={10} far={13} />
          )}
      {/* 바닥 재질 */}
      <mesh
        rotation={[-degToRad(105), degToRad(1), 0]}
        position={[0, -1.38, 5.45]}
        receiveShadow
      >
        <planeGeometry args={[10, 7]} />
        <MeshReflectorMaterial
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          depthScale={1.6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.3}
          color="#F15C1C"
          metalness={0}
          roughness={1}
          mirror={0}
        />
        {/* <meshPhongMaterial /> */}
      </mesh>
    </>
  );
};

export default Background;
