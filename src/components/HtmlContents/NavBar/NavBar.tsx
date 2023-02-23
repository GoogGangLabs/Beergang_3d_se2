import React from "react";
import logo from "assets/svg/logo.svg";
import dosi from "assets/svg/dosi.svg";
import twitter from "assets/svg/twitter.svg";
import discord from "assets/svg/discord.svg";
// import instagram from "assets/svg/instagram.svg";
import SNSIcon from "../SNSIcon/SNSIcon";
import { useRecoilValue } from "recoil";
import { iconColorState, showLogoState } from "store/atoms";
import { useResize } from 'hooks';

const NavBar = () => {
  const showLogo = useRecoilValue(showLogoState);
  const iconStyle = useRecoilValue(iconColorState);
  const { width } = useResize();

  return (
    <nav
      className={`fixed flex top-0 justify-between items-center min-w-[360px] w-screen px-[clamp(10px,2.778vw,30px)] pad:px-[clamp(30px,2.778vw,100px)] desktop:px-[clamp(100px,5.208vw,100vw)] pt-[clamp(10px,2.778vw,22px)] pad:pt-[clamp(22px,2.037vw,41px)] desktop:pt-[clamp(41px,2.135vw,100vw)] z-[2]`}
    >
      <img
        className={`w-[clamp(86.44px,24.011vw,123.49px)] pad:w-[clamp(123.49px,11.434vw,185.23px)] desktop:w-[clamp(185.23px,9.647vw,100vw)] transition duration-[300ms] ${showLogo}`}
        style={iconStyle}
        src={logo}
        alt="비어갱 로고"
        loading="lazy"
      />
      <div className="flex justify-center items-center gap-x-[clamp(6px,1.667vw,29.56px)] pad:gap-x-[clamp(29.56px,2.737vw,43px)] desktop:gap-x-[clamp(43px,2.240vw,100vw)]">
        <div className="flex justify-center items-center w-[clamp(33px,9.167vw,47px)] pad:w-auto aspect-[33/30] skew-x-[-5deg] bg-[#FF5C00CC] pad:bg-transparent">
          <div
            style={
              width >= 1080 ? iconStyle : { filter: "brightness(0) invert(0)" }
            }
          >
            <SNSIcon
              className="w-[clamp(12.59px,3.497vw,19.37px)] pad:w-[clamp(19.37px,1.794vw,26.15px)] desktop:w-[clamp(26.15px,1.362vw,100vw)] opacity-100 skew-x-[5deg]"
              imgSrc={dosi}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[clamp(33px,9.167vw,47px)] pad:w-auto aspect-[33/30] skew-x-[-5deg] bg-[#FF5C00CC] pad:bg-transparent">
          <div
            style={
              width >= 1080 ? iconStyle : { filter: "brightness(0) invert(0)" }
            }
          >
            <SNSIcon
              className="w-[clamp(16.3px,4.528vw,24.44px)] pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[clamp(33px,1.719vw,100vw)] skew-x-[5deg]"
              imgSrc={twitter}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-[clamp(33px,9.167vw,47px)] pad:w-auto aspect-[33/30] skew-x-[-5deg] bg-[#FF5C00CC] pad:bg-transparent">
          <div
            style={
              width >= 1080 ? iconStyle : { filter: "brightness(0) invert(0)" }
            }
          >
            <SNSIcon
              className="w-[clamp(16.3px,4.528vw,24.44px)] pad:w-[clamp(24.44px,2.263vw,33px)] desktop:w-[clamp(33px,1.719vw,100vw)] skew-x-[5deg]"
              imgSrc={discord}
            />
          </div>
        </div>
        {/* <div className="pad:w-[clamp(33px,3.056vw,44px)] desktop:w-[44px]">
          <SNSIcon imgSrc={instagram} />
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
