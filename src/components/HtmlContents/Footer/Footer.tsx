import React from "react";
import logo from "assets/svg/GGlabs-logo.svg";
import SNSList from "./SNSList";


const Footer = () => {
  return (
    <div className="absolute pad:bottom-[3.906vh] desktop:bottom-[3.241vh] left-0 w-full">
      <div className="mx-auto pad:w-[95.370vw] desktop:w-[92.708vw] border-1 border-white">
        <hr />
      </div>
      <div className="flex justify-between items-start font-bai-jamjuree text-white font-bold pad:text-[clamp(12px,1.111vw,16px)] desktop:text-[16px] leading-[125%] pad:px-[clamp(42.36px,3.922vw,100px)] desktop:px-[5.208vw] pad:mt-[clamp(20.25px,1.875vw,35px)] desktop:mt-[35px]">
        <img
          className="pad:w-[clamp(107px,9.907vw,185px)] desktop:w-[185px]"
          src={logo}
          alt="굳갱랩스 로고"
        />
        <div className="flex flex-col items-end">
          <SNSList />
          <h4 className="pad:mt-[clamp(26.2px,2.426vw,34px)] desktop:mt-[34px]">
            Privacy Policy
          </h4>
          <h4 className="pad:mt-[clamp(10px,0.926vw,13px)] desktop:mt-[13px]">
            Terms & Conditions
          </h4>
          <p className="font-normal pad:text-[clamp(12px,1.111vw,14px)] desktop:text-[14px] pad:mt-[clamp(30px,2.778vw,40px)] desktop:mt-[40px]">
            © 2022 Good Gang Labs Pte. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
