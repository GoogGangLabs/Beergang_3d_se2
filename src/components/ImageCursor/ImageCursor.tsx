import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import lyquid from "assets/png/lyquid.webp";
import cloudX from "assets/png/cloudX.webp";
import staut from "assets/png/staut.webp";
import redpool from "assets/png/redpool.webp";
import { DoubleSide, Vector2, Vector3 } from "three";
import gsap from "gsap";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";
import { useRecoilValue } from "recoil";
import { imageVisibleState } from "store/atoms";

let curPosition = new Vector3(0, 0, 0);

const ImageCursor = () => {
  let cursorRef = useRef<any>();
  const { viewport } = useThree();
  // const hoverImage = useRecoilValue(hoverImageState);
  const imageVisible = useRecoilValue(imageVisibleState);
  const imageList = [lyquid, lyquid, cloudX, staut, redpool];
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
      .multiplyScalar(-3.0);
    uniforms.uOffset.value = offset;
  };

  useFrame((state, delta) => {
    //Mesh단위의 viewport 계산
    if (cursorRef.current) {
      let x = (state.mouse.x * window.innerWidth) / 4550;
      let y = (state.mouse.y * window.innerHeight) / 4550;

      gsap.to(cursorRef.current.position, {
        duration: 1,
        x: state.camera.position.x + x,
        y: state.camera.position.y + y,
        z: state.camera.position.z - 0.3,
        onUpdate: updatePosition,
      });

      // cursorRef.current.lookAt(
      //   state.camera.position.x,
      //   state.camera.position.y,
      //   state.camera.position.z
      // );

      curPosition = new Vector3(
        state.camera.position.x + x,
        state.camera.position.y + y,
        0
      );
    }
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
        duration: 0.7,
        ease: "power4.out",
      });
    } else {
      gsap.to(uniforms.uAlpha, {
        value: 0,
        duration: 0.7,
        ease: "power4.out",
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
      {/* <meshBasicMaterial/> */}
    </mesh>
  );
};

export default ImageCursor;
