import React, { useState } from 'react'
import { ReflectiveSvg } from 'components';
import beergangText from "assets/svg/beergang-text.svg";
import { useFrame } from '@react-three/fiber';
import { Svg, useScroll } from '@react-three/drei';

const FadeOutSvg = () => {
  const [locationZ, setlocationZ] = useState<number>(0);
  const scroll = useScroll()
  const pageNum = 5;
  useFrame(() => {
    if (scroll.offset < 1/pageNum) {
      setlocationZ((prev) => -scroll.offset * 60)
    }
  })
  return (
    <>
      <Svg src={beergangText} position={[-5, 1.1, locationZ]} scale={0.007} />
    </>
  );
}

export default FadeOutSvg