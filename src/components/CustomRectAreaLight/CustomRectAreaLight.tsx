import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { useMemo } from "react";
import { RectAreaLight } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
const CustomRectAreaLight = ({
  color = "white",
  intensity = 1,
  width = 30,
  height = 30,
  position = [0, 0, 0],
  rotation = [Math.PI / 2, 0, 0],
}) => {
  const light = useMemo(
    () => new RectAreaLight(color, intensity, width, height),
    [color, intensity, width, height]
  );
  //조명1: 조명
  //조명2: 조명이 비추는 좌표
  const ref = useRef<any>();
  useHelper(ref, RectAreaLightHelper);
  return (
    <>
      <primitive
        object={light}
        position={position}
        ref={ref}
        rotation={rotation}
      />
    </>
  );
};

export default CustomRectAreaLight;
