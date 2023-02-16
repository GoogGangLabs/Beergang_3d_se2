import { useHelper } from '@react-three/drei';
import React, { useRef } from 'react'
import { SpotLight, SpotLightHelper } from 'three';
import { CustomSpotLightType } from './CustomSpotLight.types';

const CustomSpotLight = ({
  lightFrom = [0, 0, 0],
  lightTo = [0, 0, 0],
  lightColor = "0xffffff",
  intensity = 1,
  distance = 100,
  angle = 0.5,
  penumbra = 0.2,
  decay = 1,
}:CustomSpotLightType) => {
  const light = new SpotLight(
    lightColor,
    intensity,
    distance,
    angle,
    penumbra,
    decay
  );

  const ref = useRef<any>();
  useHelper(ref, SpotLightHelper);
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

export default CustomSpotLight