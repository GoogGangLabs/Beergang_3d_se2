import React from "react";
import Brewing from "./Brewing";
import BrewingComplete from "./BrewingComplete";
import BarelyInStock from './BarelyInStock';
import { useScrollText } from "hooks";
import { pageNumState } from "store/atoms";
import { useRecoilValue } from "recoil";

const OurRoadmap = () => {
  const pageNum = useRecoilValue(pageNumState);
  const ref1 = useScrollText(
    22 / pageNum,
    1 / pageNum,
    24 / pageNum,
    1 / pageNum
  );
  const ref2 = useScrollText(
    25 / pageNum,
    1 / pageNum,
    27 / pageNum,
    1 / pageNum
  );
  return (
    <>
      <div
        ref={ref1}
        className="absolute top-[24.844vh] pad:top-[23.698vh] desktop:top-[25.093vh] left-[6.111vw] pad:left-[14.722vw] desktop:left-[19.531vw]"
      >
        <h3 className="text-[clamp(24px,6.667vw,38px)] pad:text-[clamp(38px,3.519vw,62px)] desktop:text-[clamp(62px,3.229vw,100vw)] leading-[70%] font-merchant">
          OUR ROADMAP
        </h3>
        <BrewingComplete />
        <Brewing />
      </div>
      <div
        ref={ref2}
        className="absolute top-[34.375vh] pad:top-[34.505vh] desktop:top-[36.574vh] left-[6.111vw] pad:left-[14.722vw] desktop:left-[19.531vw]"
      >
        <BarelyInStock />
      </div>
    </>
  );
};

export default OurRoadmap;
