import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Lyquid from "assets/png/Lyquid.png";
import { Color, DoubleSide, Vector2, Vector3 } from "three";
import gsap from "gsap";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";
import { degToRad, radToDeg } from "three/src/math/MathUtils";

let curPosition = new Vector3(0, 0, 0);

const ImageCursor = ({ imageVisible }: { imageVisible: number }) => {
  let cursorRef = useRef<any>();
  const { viewport } = useThree();
  // const hoverImage = useRecoilValue(hoverImageState);
  // const imageVisible = useRecoilValue(imageVisibleState);
  const imageList = [
    Lyquid,
    Lyquid,
    "https://media.istockphoto.com/id/830229516/ko/%EC%82%AC%EC%A7%84/%EC%B6%94%EC%A0%88-of-%EA%B2%BD%EB%B3%B5%EA%B6%81-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?b=1&s=612x612&w=0&k=20&c=wO6JiIJyFz-L2gQZsUtB8bVVRXfdXkgj0m3IcRLHWf0=",
    Lyquid,
    "https://media.istockphoto.com/id/830229516/ko/%EC%82%AC%EC%A7%84/%EC%B6%94%EC%A0%88-of-%EA%B2%BD%EB%B3%B5%EA%B6%81-%EC%84%9C%EC%9A%B8-%ED%95%9C%EA%B5%AD.jpg?b=1&s=612x612&w=0&k=20&c=wO6JiIJyFz-L2gQZsUtB8bVVRXfdXkgj0m3IcRLHWf0=",
  ];
  const texture1 = useTexture(imageList[1]);
  const texture2 = useTexture(imageList[2]);
  const texture3 = useTexture(imageList[3]);
  const texture4 = useTexture(imageList[4]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture1 },
      uOffset: { value: new Vector2(0.0, 0.0) },
      uAlpha: { value: 0 },
    }),
    [texture1]
  );

  const updatePosition = () => {
    let offset = cursorRef.current.position
      .clone()
      .sub(curPosition)
      .multiplyScalar(-2.0);
    uniforms.uOffset.value = offset;
  };

  useFrame((state, delta) => {
    //Mesh단위의 viewport 계산
    let x = (state.mouse.x * viewport.width) / 58.5;
    let y = (state.mouse.y * viewport.height) / 58.5;

    gsap.to(cursorRef.current.position, {
      duration: 1,
      x: state.camera.position.x + x,
      y: state.camera.position.y + y,
      z: state.camera.position.z - 0.2,
      onUpdate: updatePosition,
    });

    curPosition = new Vector3(
      state.camera.position.x + x,
      state.camera.position.y + y,
      0
    );
  });

  useEffect(() => {
    if (!texture1 || !texture2 || !texture3 || !texture4) return;
    if (imageVisible === 1) {
      uniforms.uTexture.value = texture1;
    }
    if (imageVisible === 2) {
      uniforms.uTexture.value = texture2;
    }
    if (imageVisible === 3) {
      uniforms.uTexture.value = texture3;
    }
    if (imageVisible === 4) {
      uniforms.uTexture.value = texture4;
    }
  }, [imageVisible, uniforms, texture1, texture2, texture3, texture4]);

  useEffect(() => {
    if (imageVisible) {
      gsap.to(uniforms.uAlpha, {
        value: 1.0,
        duration: 1,
        ease: "Power4.easeOut",
      });
    } else {
      gsap.to(uniforms.uAlpha, {
        value: 0,
        duration: 1,
        ease: "Power4.easeOut",
      });
    }
  }, [imageVisible, uniforms]);

  return (
    //  rotation={[0, degToRad(30), 0]}
    <mesh ref={cursorRef} scale={0.1}>
      <planeBufferGeometry args={[1, 1, 20, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={DoubleSide}
      />
    </mesh>
  );
};

export default ImageCursor;
