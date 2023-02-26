import { MeshReflectorMaterial, Sparkles } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { BackSide, Color, Vector3 } from "three";
import {
  iconColorState,
  introAcceptedState,
  isFirstSceneState,
  pageNumState,
  sceneStartState,
  showLogoState,
} from "store/atoms";

const Background = () => {
  const scroll = useScroll();
  const [isFirstScene, setIsFirstScene] = useRecoilState(isFirstSceneState);
  const [showLogo, setShowLogo] = useRecoilState(showLogoState);
  const [iconStyle, setIconStyle] = useRecoilState(iconColorState);
  const [sceneStart, setSceneStart] = useRecoilState(sceneStartState);
  const clicked = useRecoilValue(introAcceptedState);
  const pageNum = useRecoilValue(pageNumState);
  const { camera } = useThree();
  const sphereRef = useRef<any>();
  const fogRef = useRef<any>();
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R: number = 220;
  const G: number = 79;

  useEffect(() => {
    camera.position.set(-1, 4, 15);
    let t: any;
    if (clicked) {
      gsap.to(document.body.style, {
        background: "rgb(220,79,0)",
        duration: 3,
        ease: "power4.inOut",
      });
      gsap.to(camera.position, {
        x: 0,
        y: 0,
        z: 5,
        duration: 2,
        ease: "power4.inOut",
      });

      t = setTimeout(() => {
        setSceneStart(true);
      }, 3000);
    }
    return () => clearTimeout(t);
  }, [clicked, camera, setSceneStart]);

  useFrame((state, delta) => {
    //배경색 전환
    if (scroll.range(0, 2 / pageNum) < 1.05) {
      sphereRef.current.material.color = new Color(`rgb(${Math.floor((1 - scroll.range(0, 1.5 / pageNum)) * R)},${Math.floor((1 - scroll.range(0, 2 / pageNum)) * G)},0)`);
      fogRef.current.color = new Color(
        `rgb(${Math.floor(
          (1 - scroll.range(0, 2 / pageNum)) * 250
        )},${Math.floor((1 - scroll.range(0, 2 / pageNum)) * 140)},0)`
      );
      fogRef.current.near = scroll.range(0, 2/pageNum) * 11 + 0.5
    }

    if (scroll.range(0, 1.8 / pageNum) >= 1 && !isFirstScene) {
      setIsFirstScene(true);
    } else if (scroll.range(0, 1.8 / pageNum) < 1 && isFirstScene) {
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
          <Sparkles
            color={"rgba(220, 79, 0, 1)"}
            // count={40}
            size={2}
            speed={0.3}
            scale={6}
            noise={1}
            opacity={1}
            position={[0, 0, 2]}
          />
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
      <mesh ref={sphereRef} position={[0, 0, 1]}>
        <sphereGeometry args={[13, 30, 30]} />
        <meshPhongMaterial
          side={BackSide}
          opacity={0}
        />
      </mesh>
      <fog ref={fogRef} attach="fog" far={18} />
      {/* 바닥 재질 */}
    </>
  );
};

export default Background;
