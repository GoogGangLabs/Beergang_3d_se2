import React, { useRef } from "react";
import { useScroll } from "components/CustomScrollControls/CustomScrollControls";
import { useFrame } from "@react-three/fiber";
import { pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";
import { useScrollText } from "hooks";

const BeergangIntro = () => {
  const pageNum = useRecoilValue(pageNumState);
  const ref = useScrollText(
    1 / pageNum,
    0.4 / pageNum,
    3 / pageNum,
    0.4 / pageNum
  );

  return (
    <div
      ref={ref}
      className="absolute top-[37.656vh] pad:top-[47.786vh] desktop:top-[49.259vh] right-[3.333vw] pad:right-[9.907vw] desktop:right-[10.521vw] w-[clamp(166px,46.111vw,336px)] pad:w-[clamp(336px,31.111vw,549px)] desktop:w-[clamp(549px,28.594vw,100vw)] opacity-100"
    >
      <h3 className="text-[clamp(11px,3.056vw,16px)] pad:text-[clamp(16px,1.481vw,26px)] desktop:text-[clamp(26px,1.354vw,100vw)] leading-[125%]">
        BeerGang is a 6,666 emotionally interactive 3D full-body NFT collection
        inspired by beer, crafted by GoodGang Labs.
      </h3>
    </div>
  );
};

export default BeergangIntro;
