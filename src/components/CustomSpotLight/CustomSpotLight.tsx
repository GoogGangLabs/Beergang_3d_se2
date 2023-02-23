import { useHelper } from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";
import { CustomSpotLightType } from "./CustomSpotLight.types";

const CustomSpotLight = ({
  lightFrom = [0, 0, 0],
  lightTo = [0, 0, 0],
  lightColor = "white",
  intensity = 1,
  distance = 100,
  angle = 0.5,
  penumbra = 0.2,
  decay = 1,
}: CustomSpotLightType) => {
  const light = useMemo(
    () =>
      new SpotLight(lightColor, intensity, distance, angle, penumbra, decay),
    [lightColor, intensity, distance, angle, penumbra, decay]
  );

  useEffect(() => {
    light.castShadow = true;
  }, [light]);

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

export default CustomSpotLight;
