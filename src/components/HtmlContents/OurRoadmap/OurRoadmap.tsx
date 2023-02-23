import React from "react";
import Brewing from "./Brewing";
import BrewingComplete from "./BrewingComplete";
import BarelyInStock from './BarelyInStock';

const OurRoadmap = () => {
  return (
    <>
      <div className="absolute top-[800vh] left-[10vw]">
        <h3 className="text-[42px]">Page 6</h3>
      </div>
      <div className="absolute top-[850vh] left-[6.111vw] pad:left-[14.722vw] desktop:left-[19.531vw]">
        <h3 className="text-[clamp(24px,6.667vw,38px)] pad:text-[clamp(38px,3.519vw,62px)] desktop:text-[clamp(62px,3.229vw,100vw)] leading-[70%] font-merchant">
          OUR ROADMAP
        </h3>
        <BrewingComplete />
        <Brewing />
      </div>
      <div className="absolute top-[900vh] left-[6.111vw] pad:left-[14.722vw] desktop:left-[19.531vw]">
        <BarelyInStock />
      </div>
    </>
  );
};

export default OurRoadmap;
