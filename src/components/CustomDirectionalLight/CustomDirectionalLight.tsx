import { useHelper } from '@react-three/drei';
import React, { useRef } from 'react'
import { DirectionalLight, DirectionalLightHelper } from 'three';

const CustomDirectionalLight = ({
  lightFrom = [0, 0, 0],
  lightTo = [0, 0, 0],
  lightColor = "white",
  intensity = 1,
}:any) => {
  const light = new DirectionalLight(
    lightColor,
    intensity,
  );

  const ref = useRef<any>();
  useHelper(ref, DirectionalLightHelper);
  return (
    <>
      <primitive
        ref={ref}
        object={light}
        position={lightFrom}
      />
      <primitive object={light.target} position={lightTo} />
    </>
  );
};

export default CustomDirectionalLight