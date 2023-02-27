import React, { useRef, useState } from 'react'
import beergangText from "assets/svg/beergang-text.svg";
import { useFrame, useThree } from '@react-three/fiber';
import { Svg } from '@react-three/drei';
import { pageNumState } from 'store/atoms';
import { useRecoilValue } from 'recoil';
import { useScroll } from 'components/CustomScrollControls/CustomScrollControls';

const FadeOutSvg = () => {
  const [locationZ, setlocationZ] = useState<number>(0);
  const ref = useRef<any>()
  const scroll = useScroll()
  const pageNum = useRecoilValue(pageNumState);
  const { viewport } = useThree();

  useFrame(() => {
    if (scroll.range(0,2/pageNum) < 1) {
      ref.current.position.z = -scroll.range(0,2/pageNum) * 3 - 0.8
    }
  })

  return (
    <>
      <Svg ref={ref} src={beergangText} position={[-0.78, 0.2, -1]} scale={0.0011} />
    </>
  );
}

export default FadeOutSvg