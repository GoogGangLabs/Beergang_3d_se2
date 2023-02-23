import React from 'react'
import dosi from "assets/svg/dosi.svg";
import twitter from "assets/svg/twitter.svg";
import discord from "assets/svg/discord.svg";
import instagram from "assets/svg/instagram.svg";
import SNSIcon from "../SNSIcon/SNSIcon";

const SNSList = () => {
  return (
    <div
      className="flex justify-end items-center gap-x-[clamp(17px,4.722vw,29.56px)] pad:gap-x-[clamp(29.56px,2.737vw,43px)] desktop:gap-x-[clamp(43px,2.240vw,100vw)]"
      style={{
        filter:
          "invert(100%) sepia(100%) saturate(1%) hue-rotate(137deg) brightness(153%) contrast(101%)",
      }}
    >
      <div className="w-[clamp(15.13px,4.203vw,19.37px)] pad:w-[clamp(19.37px,1.794vw,26.15px)] desktop:w-[26.15px]">
        <SNSIcon imgSrc={dosi} />
      </div>
      <div className="w-[clamp(19.1px,5.306vw,24.44px)] pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[33px]">
        <SNSIcon imgSrc={twitter} />
      </div>
      <div className="w-[clamp(19.1px,5.306vw,24.44px)] pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[33px]">
        <SNSIcon imgSrc={discord} />
      </div>
      <div className="hidden pad:block pad:w-[clamp(33px,3.056vw,44px)] desktop:w-[44px]">
        <SNSIcon imgSrc={instagram} />
      </div>
    </div>
  );
}

export default SNSList