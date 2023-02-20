import React, { useEffect } from "react";
import logo from "assets/svg/logo.svg";
import dosi from "assets/svg/dosi.svg";
import twitter from "assets/svg/twitter.svg";
import discord from "assets/svg/discord.svg";
import instagram from "assets/svg/instagram.svg";
import SNSIcon from "../SNSIcon/SNSIcon";
import { useRecoilValue } from 'recoil';
import { iconColorState, showLogoState } from "store/atoms";

const NavBar = () => {
  const showLogo = useRecoilValue(showLogoState)
  const iconStyle = useRecoilValue(iconColorState)

  return (
    <nav
      className={`fixed flex top-0 justify-between items-center min-w-[360px] w-screen px-[clamp(15px,4.167vw,30px)] pad:px-[clamp(30px,2.778vw,100px)] desktop:px-[100px] pt-[26px] pad:pt-[clamp(22px,2.037vw,41px)] desktop:pt-[41px] z-[2]`}
    >
      <img
        className={`w-[clamp(86.44px,24.011vw,123.49px)] pad:w-[clamp(123.49px,11.434vw,185.23px)] desktop:w-[185.23px] transition duration-[300ms] ${showLogo}`}
        style={iconStyle}
        src={logo}
        alt="비어갱 로고"
        loading="lazy"
      />
      <div
        className="flex justify-center items-center pad:gap-x-[clamp(29.56px,2.737vw,43px)] desktop:gap-x-[43px]"
        style={iconStyle}
      >
        <div className="pad:w-[clamp(19.37px,1.794vw,26.15px)] desktop:w-[26.15px]">
          <SNSIcon imgSrc={dosi} />
        </div>
        <div className="pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[33px]">
          <SNSIcon imgSrc={twitter} />
        </div>
        <div className="pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[33px] text-white">
          <SNSIcon imgSrc={discord} />
        </div>
        {/* <div className="pad:w-[clamp(33px,3.056vw,44px)] desktop:w-[44px]">
          <SNSIcon imgSrc={instagram} />
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
