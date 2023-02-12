import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import beer from "assets/png/beer.png";
import { Color, Vector2 } from "three";
import gsap from "gsap";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";
import { useRecoilValue } from "recoil";
import { hoverImageState, imageVisibleState } from "store/fourTribes";

const ImageCursor = ({imageVisible}:{imageVisible: number}) => {
  let cursorRef = useRef<any>();
  const { viewport } = useThree();
  const hoverImage = useRecoilValue(hoverImageState);
  // const imageVisible = useRecoilValue(imageVisibleState);
  const texture = useTexture(hoverImage);
  

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uOffset: { value: new Vector2(0.0, 0.0) },
      uAlpha: { value: 0 },
    }),
    [texture]
  );

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
  });


  useEffect(() => {
    if (imageVisible) {
      gsap.to(uniforms.uAlpha, {
        value: 1,
        duration: 0.5,
        ease: "Power4.easeOut"
      })
    } else {
      gsap.to(uniforms.uAlpha, {
        value: 0,
        duration: 0.5,
        ease: "Power4.easeOut",
      });
    }

  },[imageVisible, uniforms])


  return (
    <mesh ref={cursorRef} scale={1.5} rotation={[0, 0, 0]}>
      <planeBufferGeometry args={[1, 1, 30, 30]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        opacity={1}
      />
    </mesh>
  );
};

export default ImageCursor;
