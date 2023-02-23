import {
  Environment,
  MeshReflectorMaterial,
  Sparkles,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  iconColorState,
  isFirstSceneState,
  pageNumState,
  showLogoState,
} from "store/atoms";
import { BackSide } from "three";
import { degToRad } from "three/src/math/MathUtils";

const Background = () => {
  const scroll = useScroll();
  const [rgb, setRgb] = useState<string>("rgb(0, 0, 0)");
  const [isFirstScene, setIsFirstScene] = useRecoilState(isFirstSceneState);
  const [showLogo, setShowLogo] = useRecoilState(showLogoState);
  const [iconStyle, setIconStyle] = useRecoilState(iconColorState);

  const pageNum = useRecoilValue(pageNumState);
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R: number = 220;
  const G: number = 79;
  const B: number = 0;

  useFrame((state, delta) => {

    if (scroll.range(0, 1/pageNum) < 1.1) {
      setRgb(
        `rgb(${Math.floor((1 - scroll.range(0, 1 / pageNum)) * R)},${Math.floor(
          (1 - scroll.range(0, 1 / pageNum)) * G
        )},0)`
      );
    }

    if (scroll.offset >= 2.6 / pageNum) {
      setIsFirstScene(true);
    } else {
      setIsFirstScene(false);
    }

    //SNS 아이콘 색 전환 로직
      if (scroll.range(0, 1 / pageNum) < 1) {
        setIconStyle({
          filter: `brightness(${scroll.range(0, 1 / pageNum) * 100}%)`,
        });
        setShowLogo("opacity-0");
      } else if (scroll.range(1 / pageNum, 1 / pageNum) < 1) {
        setShowLogo("opacity-100");
      } else if (scroll.range(2 / pageNum, 1 / pageNum) < 1) {
        setIconStyle({ filter: "brightness(0) invert(1)" });
      }
  });
  return (
    <>
      <color attach="background" args={[rgb]} />
      {isFirstScene ? (
        <>
          <fog attach="fog" color="black" near={2.4} far={3.5} />
          <mesh
            rotation={[-degToRad(90), degToRad(0), 0]}
            position={[0, -1.7, 5.45]}
            receiveShadow
          >
            <planeGeometry args={[5, 5]} />
            <MeshReflectorMaterial
              resolution={512}
              mixBlur={1}
              mixStrength={100}
              depthScale={1.6}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.3}
              color="#010101"
              metalness={0}
              roughness={1}
              mirror={0}
            />
          </mesh>
        </>
      ) : (
        <>
          <fog attach="fog" color="black" near={12} far={16} />
        </>
      )}
      {rgb === "rgb(0,0,0)" && (
        <mesh position={[0, 0, 4]}>
          <sphereGeometry args={[10, 10, 10]} />
          <meshPhongMaterial color={"#100f0f"} side={BackSide} />
        </mesh>
      )}

      <Sparkles
        color={"#FF5D00"}
        count={30}
        size={1}
        speed={0.3}
        scale={5}
        noise={1}
        position={[1, 0, 5]}
      />
      <Sparkles
        color={"#FF5D00"}
        count={30}
        size={1.3}
        speed={0.3}
        scale={5}
        noise={1}
        opacity={0.3}
        position={[1, 0, 5]}
      />
      <Sparkles
        color={"#FF5D00"}
        count={30}
        size={1.2}
        speed={0.3}
        scale={5}
        noise={1}
        opacity={0.7}
        position={[1, 0, 5]}
      />
      {/* 바닥 재질 */}
    </>
  );
};

export default Background;
