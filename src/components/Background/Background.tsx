import {
  MeshReflectorMaterial,
  Sparkles,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  iconColorState,
  introAcceptedState,
  isFirstSceneState,
  pageNumState,
  showLogoState,
} from "store/atoms";

const Background = () => {
  const scroll = useScroll();
  const [isFirstScene, setIsFirstScene] = useRecoilState(isFirstSceneState);
  const [showLogo, setShowLogo] = useRecoilState(showLogoState);
  const [iconStyle, setIconStyle] = useRecoilState(iconColorState);
  const [sceneStart, setSceneStart] = useState<boolean>(false);
  const clicked = useRecoilValue(introAcceptedState);
  const pageNum = useRecoilValue(pageNumState);
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R: number = 220;
  const G: number = 79;
  useEffect(() => {
    document.body.style.background = "black";
    let t:any;
    if (clicked) {
      gsap.to(document.body.style, {
        background: "rgb(220,79,0)",
        duration: 1.2,
        ease: "power4.in"
      })
      t = setTimeout(() => {
      setSceneStart(true)
    }, 2000)
    }
    return () => clearTimeout(t)
  }, [clicked]);

  useFrame((state, delta) => {
    //배경색 전환
    if (scroll.range(0, 1 / pageNum) < 1.05 && sceneStart) {
      document.body.style.background = `rgb(${Math.floor(
        (1 - scroll.range(0, 1 / pageNum)) * R
      )},${Math.floor((1 - scroll.range(0, 1 / pageNum)) * G)},0)`;
    }

    if (scroll.offset >= 0.9 / pageNum && !isFirstScene) {
      setIsFirstScene(true);
    } else if (scroll.offset < 0.9 / pageNum && isFirstScene) {
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
      {isFirstScene ? (
        <>
          {/* <mesh position={[0, 0, 3]}>
            <boxGeometry args={[10, 10, 10]} />
            <meshPhongMaterial color={"#111010"} side={BackSide} />
          </mesh> */}
          <mesh position={[0, 0, -3]}>
            <planeGeometry args={[25, 20]} />
            <meshPhongMaterial color={"#241f1f"} />
          </mesh>
          {/* <mesh
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
              color="rgb(1,1,1)"
              metalness={0}
              roughness={1}
              mirror={0}
            />
          </mesh> */}
        </>
      ) : (
        <></>
      )}

      <fog attach="fog" color="black" near={12} far={16} />
      <Sparkles
        color={"#FF5D00"}
        count={40}
        size={1.2}
        speed={0.3}
        scale={5}
        noise={1}
        opacity={1}
        position={[1, 0, 2]}
      />
      {/* 바닥 재질 */}
    </>
  );
};

export default Background;
