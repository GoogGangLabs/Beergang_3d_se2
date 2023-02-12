import * as THREE from "three";
import React, { useMemo, useRef, useState } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import {
  MeshDistortMaterial,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  useScroll,
  useTexture,
} from "@react-three/drei";
import brush from "assets/png/brush.png";
import { AdditiveBlending, Color, Vector2 } from "three";
import gsap from "gsap";

const vertexShader = `
uniform float u_time;

varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
  modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
  
  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;

const fragmentShader = `
varying vec2 vUv;
varying float vZ;

vec3 colorA = vec3(0.912,0.191,0.652);
vec3 colorB = vec3(1.000,0.777,0.052);

void main() {
  vec3 color = mix(colorA, colorB, vZ * 1.0 + 0.5);
  gl_FragColor = vec4(color,1.0);
}

`;

const WaveCursor = () => {
  let cursorRef = useRef<any>();
  const { viewport } = useThree();
  // const [curWave, setCurwave] = useState<number>(0);
  // const [rotation, setRotation] = useState<number>(0);
  // const [scale, setScale] = useState<number>(1);

  const texture = useTexture(brush);

  useFrame((state, delta) => {
    //가운데에서 카메라가 움직이는 좌표 + 현재 마우스 좌표 => 카메라가 1.5만큼 증가하면 -1.5만큼 마우스 보정
    let x = (state.mouse.x * viewport.width) / 2;
    let y = (state.mouse.y * viewport.height) / 2;

    gsap.to(cursorRef.current.position, {
      duration: 0.4,
      x: state.camera.position.x + x,
      y: state.camera.position.y + y,
      z: state.camera.position.z - 5,
    });
    
    const { clock } = state;
    cursorRef.current.material.uniforms.u_time.value = clock.getElapsedTime();

    // if (Math.abs(x - prevMouse.x) < 0.01 && Math.abs(y - prevMouse.y) < 0.01) {
    // } else {
    //   setCurwave((prev) => (prev + 1) % 30);
    // }
  });

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  return (
    <mesh ref={cursorRef} scale={1.5} rotation={[0, 0, 0]}>
      <planeBufferGeometry args={[1, 1, 30, 30]} />
      {/* <MeshTransmissionMaterial
        distortionScale={1}
        transmission={1}
        samples={16}
        temporalDistortion={0}
        toneMapped={false}
        roughness={0.2}
        chromaticAberration={0}
        // map={texture}
        thickness={100}
        ior={1.5}
        anisotropy={0.2}
        attenuationColor={"#fff"}
        color="white"
        // transparent
        // opacity={0.5}
      /> */}
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        // transparent
        opacity={1}
      />
    </mesh>
  );
};

export default WaveCursor;
