import React from "react";
import logo from "assets/svg/GGlabs-logo.svg";
import SNSList from "./SNSList";


const Footer = () => {
  return (
    <div className="absolute bottom-[clamp(27px,7.5vw,30px)] pad:bottom-[3.906vh] desktop:bottom-[3.241vh] left-0 w-full">
      <div className="mx-auto w-[91.667vw] pad:w-[95.370vw] desktop:w-[92.708vw] border-1 border-white">
        <hr />
      </div>
      <div className="flex justify-between items-start font-bai-jamjuree text-white font-bold text-[clamp(9px,2.5vw,12px)] pad:text-[clamp(12px,1.111vw,16px)] desktop:text-[clamp(14px,0.729vw,100vw)] leading-[125%] px-[clamp(15px,4.167vw,42.36px)] pad:px-[clamp(42.36px,3.922vw,100px)] desktop:px-[clamp(100px,5.208vw,100vw)] mt-[clamp(29px,8.056vw,40px)] pad:mt-[clamp(20.25px,1.875vw,35px)] desktop:mt-[clamp(35px,1.823vw,100vw)]">
        <img
          className="w-[clamp(100.91px,28.031vw,107px)] pad:w-[clamp(107px,9.907vw,185px)] desktop:w-[clamp(185px,9.635vw,100vw)]"
          src={logo}
          alt="굳갱랩스 로고"
        />
        <div className="flex flex-col items-end">
          <SNSList />
          <h4 className="mt-[clamp(27.93px,7.758vw,27.2px)] pad:mt-[clamp(16.9px,1.565vw,23px)] desktop:mt-[clamp(23px,1.198vw,100vw)]">
            Privacy Policy
          </h4>
          <h4 className="mt-[clamp(10px,2.778vw,11px)] pad:mt-[clamp(11px,1.019vw,13px)] desktop:mt-[clamp(13px,0.677vw,100vw)]">
            Terms & Conditions
          </h4>
          <p className="font-normal mt-[clamp(33px,9.167vw,33px)] pad:mt-[clamp(30px,2.778vw,40px)] desktop:mt-[clamp(40px,2.083vw,100vw)] break-normal">
            © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
