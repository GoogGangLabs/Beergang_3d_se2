import { useResize } from "hooks";
import React from "react";

const Brewing = () => {
  const { width } = useResize();

  return (
    <div className="mt-[clamp(40px,11.111vw,68px)] pad:mt-[clamp(68px,6.296vw,71px)] desktop:mt-[clamp(71px,3.698vw,100vw)]">
      <div className="flex justify-center items-center skew-x-[-5deg] font-bold text-black bg-gradient-to-l from-[#FF5C00] to-[#FF2E00] text-[clamp(10px,2.778vw,14px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(20px,1.042vw,100vw)] w-[clamp(60px,16.667vw,100px)] pad:w-[clamp(100px,9.259vw,220px)] desktop:w-[clamp(140px,7.292vw,100vw)] aspect-[140/34] font-exo">
        <h3 className="skew-x-[5deg]">Brewing</h3>
      </div>
      <ul className="text-[#FF4D00] font-bai-jamjuree text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] mt-[clamp(9px,2.5vw,25px)] pad:mt-[25px] desktop:mt-[clamp(25px,1.042vw,100vw)] leading-[125%]">
        <li>
          &#x2022;&ensp;BeerGang x Beer Brands
          {width < 1080 && (
            <>
              <br />
              &ensp;
            </>
          )}{" "}
          Partnerships
        </li>
        <li>
          &#x2022;&ensp;Launch GangHouse
          <br />
          &ensp; (BeerGang Holder’s Metaverse)
        </li>
        <li>
          &#x2022;&ensp;Launch A.M.A System at{" "}
          {width < 1080 && (
            <>
              <br />
              &ensp;
            </>
          )}{" "}
          GangHouse
        </li>
      </ul>
    </div>
  );
};

export default Brewing;
