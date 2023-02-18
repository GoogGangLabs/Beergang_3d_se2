import {
  Environment,
  MeshReflectorMaterial,
  Sparkles,
  useScroll,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isFirstSceneState, pageNumState } from "store/atoms";
import {
  BackSide,
  Color,
  DoubleSide,
  MathUtils,
  ShaderMaterial,
  Vector2,
} from "three";
import { degToRad } from "three/src/math/MathUtils";

// function RippleShaderMaterial() {
//   const ref = useRef<any>();

//   const material = useMemo(() => {
//     const vertexShader = `
//       varying vec2 vUv;

//       void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//       }
//     `;

//     const fragmentShader = `
//       uniform float time;
//       uniform vec2 mouse;
//       uniform vec3 color;
//       uniform float amplitude;

//       varying vec2 vUv;

//       void main() {
//         float distance = length((vUv - mouse) * vec2(1.0, aspect) * 2.0);
//         float ripple = sin(distance * 10.0 - time * 4.0) * amplitude;
//         vec3 finalColor = color + vec3(ripple);
//         gl_FragColor = vec4(finalColor, 1.0);
//       }
//     `;

//     return new ShaderMaterial({
//       uniforms: {
//         time: { value: 0 },
//         mouse: { value: new Vector2(0.5, 0.5) },
//         color: { value: new Color("#FFFFFF") },
//         amplitude: { value: 0.1 },
//       },
//       vertexShader,
//       fragmentShader,
//     });
//   }, []);

//   useFrame(({ clock }) => {
//     material.uniforms.time.value = clock.elapsedTime;
//   });

//   return (
//     <mesh ref={ref} scale={[2, 2, 2]}>
//       <planeBufferGeometry args={[1, 1, 32, 32]} />
//       {material}
//     </mesh>
//   );
// }

const Background = () => {
  const scroll = useScroll();
  const [rgb, setRgb] = useState<string>("rgb(0, 0, 0)");
  const [isFirstScene, setIsFirstScene] = useRecoilState(isFirstSceneState);
  const pageNum = useRecoilValue(pageNumState)
  //최초 RGB 값, 페이지 = 5 일 때, 검은색으로 수렴
  const R: number = 220;
  const G: number = 79;
  const B: number = 0;

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
    if (scroll.offset >= 2.6/pageNum) {
      setIsFirstScene(true);
    } else {
      setIsFirstScene(false);
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
            <planeGeometry args={[15, 15]} />
            <MeshReflectorMaterial
              resolution={1024}
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
          <sphereGeometry args={[15, 100, 100]} />
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
