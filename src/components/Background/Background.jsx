import {
  CubeCamera,
  Environment,
  MeshReflectorMaterial,
  Sparkles,
} from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import {
  BackSide,
  BasicDepthPacking,
  Color,
  LinearEncoding,
  RGBADepthPacking,
  TextureEncoding,
  TextureLoader,
  Vector3,
} from "three";
import {
  iconColorState,
  introAcceptedState,
  isFirstSceneState,
  pageNumState,
  sceneStartState,
  showLogoState,
} from "store/atoms";
import { degToRad } from "three/src/math/MathUtils";
import night from "assets/environment/night1.hdr";

const Background = () => {
  const scroll = useScroll();
  const [isFirstScene, setIsFirstScene] = useRecoilState(isFirstSceneState);
  const [sceneStart, setSceneStart] = useRecoilState(sceneStartState);
  const clicked = useRecoilValue(introAcceptedState);
  const pageNum = useRecoilValue(pageNumState);
  const { camera } = useThree();
  const sphereRef = useRef();
  const fogRef = useRef();
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R = 220;
  const G = 79;

  useEffect(() => {
    let t;
    if (clicked) {
      t = setTimeout(() => {
        setSceneStart(true);
      }, 3000);
    }
    return () => clearTimeout(t);
  }, [clicked, setSceneStart]);
  // useEffect(() => {
  //   // document.body.style.background = "rgb(220,79,0)";
  //   camera.lookAt(-3, 2, -1);
  //   camera.position.set(0, 0, 1);
  //   // sphereRef.current.material.color = new Color("rgb(0,0,0)");
  //   // fogRef.current.color = new Color("rgb(0,0,0)");
  //   const color = new Color("rgb(220,79,0)");
  //   const fogColor = new Color("rgb(220,79,0)");
  //   if (clicked) {
  //     // gsap.to(sphereRef.current.material.color, {
  //     //   r: color.r,
  //     //   g: color.g,
  //     //   b: color.b,
  //     //   duration: 0.8,
  //     //   delay: 2.2,
  //     //   ease: "power1.inOut",
  //     // });
  //     gsap.to(fogRef.current.color, {
  //       r: fogColor.r,
  //       g: fogColor.g,
  //       b: fogColor.b,
  //       duration: 0.8,
  //       delay: 2,
  //       ease: "power4.inOut",
  //     });
  //     gsap.to(camera.position, {
  //       x: 0,
  //       y: 0,
  //       z: 0,
  //       duration: 2.7,
  //       delay: 0.3,
  //       ease: "power1.inOut",
  //       onUpdate: function () {
  //         camera.lookAt(0, 0, -1);
  //       },
  //     });
  //   }
  // }, [clicked, camera]);

  // useFrame((state, delta) => {
  //   //배경색 전환
  //   if (scroll.range(0, 2 / pageNum) < 1.05 && sceneStart) {
  //     sphereRef.current.material.color = new Color(
  //       `rgb(${Math.floor(
  //         (1 - scroll.range(0, 1.5 / pageNum)) * R
  //       )},${Math.floor((1 - scroll.range(0, 2 / pageNum)) * G)},0)`
  //     );

  //     fogRef.current.color = new Color(
  //       `rgb(${Math.floor(
  //         (1 - scroll.range(0, 1.4 / pageNum)) * R
  //       )},${Math.floor((1 - scroll.range(0, 1.4 / pageNum)) * G)},0)`
  //     );

  //     fogRef.current.far = scroll.range(0, 20 / pageNum) * 3 + 13;
  //     fogRef.current.near = scroll.range(0, 20 / pageNum) * 3 + 3;
  //     sphereRef.current.visible = true;
  //     sphereRef.current.opacity = scroll.range(0, 2 / pageNum);
  //   } 
  //   if (scroll.range(0, 2 / pageNum) >= 1) {
  //     sphereRef.current.visible = false;
  //   }
  //   console.log(sphereRef.current.opacity);

  //   if (scroll.range(0, 1.2 / pageNum) >= 1 && !isFirstScene) {
  //     setIsFirstScene(true);
  //   } else if (scroll.range(0, 1.2 / pageNum) < 1 && isFirstScene) {
  //     setIsFirstScene(false);
  //   }
  // });

  return (
    <>
      {isFirstScene ? <></> : <></>}
      {/* <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <mesh
              rotation={[-degToRad(90), degToRad(0), 0]}
              position={[0, -0.77, 0.45]}
              receiveShadow
            >
              <planeGeometry args={[8, 3]} />
              <MeshReflectorMaterial
                resolution={1024}
                mixBlur={1}
                mixStrength={100}
                depthScale={1.6}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.3}
                color="#ff7e1b"
                metalness={0}
                roughness={1}
                mirror={0}
                opacity={0}
                envMap={texture}
              />
            </mesh>
          </>
        )}
      </CubeCamera> */}
      <Environment
        // files={[a, a, a, a, a, a]}
        files={night}
        background={true}
        blur={0.5}
        preset={undefined}
        // map={useLoader(TextureLoader, a)}
      ></Environment>
      {/* <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[30.5, 30, 30]} />
        <meshBasicMaterial
          side={BackSide}
          color={"rgb(220,79,0)"}
          visible={true}
          opacity={0}
          // map={useLoader(TextureLoader, a)}
        />
      </mesh> */}
      {/* <fog ref={fogRef} attach="fog" near={3.1} far={3.4} /> */}
      {/* <fog ref={fogRef} attach="fog" near={1.5} far={3} /> */}
      {/* 바닥 재질 */}
    </>
  );
};

export default Background;
