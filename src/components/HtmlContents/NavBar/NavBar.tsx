import React from "react";
import logo from "assets/svg/logo.svg";
import dosi from "assets/svg/dosi.svg";
import twitter from "assets/svg/twitter.svg";
import discord from "assets/svg/discord.svg";
import instagram from "assets/svg/instagram.svg";
import toggleImg from "assets/svg/toggle-img.svg";
import SNSIcon from "../SNSIcon/SNSIcon";
const NavBar = () => {
  return (
    <nav
      className={`fixed flex top-0 justify-between items-center min-w-[360px] w-full px-[clamp(15px,4.167vw,30px)] pad:px-[clamp(30px,2.778vw,100px)] desktop:px-[100px] pt-[26px] pad:pt-[clamp(22px,2.037vw,41px)] desktop:pt-[41px] z-[2]`}
    >
      <img
        className="w-[clamp(86.44px,24.011vw,123.49px)] pad:w-[clamp(123.49px,11.434vw,185.23px)] desktop:w-[185.23px]"
        // transition
        // delay-150
        // hover:opacity-70
        src={logo}
        alt="비어갱 로고"
        loading="lazy"
      />
      <div className="hidden pad:flex justify-center items-center pad:gap-x-[clamp(29.56px,2.737vw,43px)] desktop:gap-x-[43px]">
        <div className="pad:w-[clamp(19.37px,,26.15px)] desktop:w-[26.15px]">
          <SNSIcon imgSrc={dosi} />
        </div>
        <div className="pad:w-[clamp(24.44px,,33px)] desktop:w-[33px]">
          <SNSIcon imgSrc={twitter} />
        </div>
        <div className="pad:w-[clamp(24.44px,,33px)] desktop:w-[33px]">
          <SNSIcon imgSrc={discord} />
        </div>
        <div className="pad:w-[clamp(33px,,44px)] desktop:w-[44px]">
          <SNSIcon imgSrc={instagram} />
        </div>
      </div>
      <div className="pad:hidden">
        <img className="w-[clamp(36px,10vw,40px)] cursor-pointer" src={toggleImg} alt="토글 버튼" />
      </div>
    </nav>
  );
};

export default NavBar;
