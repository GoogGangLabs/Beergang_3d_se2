import React, { cloneElement, useState } from "react";
import styles from "./Intro.module.css";
import introImage from "assets/svg/intro-image.svg";
import { useRecoilState } from "recoil";
import { introReadyState } from "store/atoms";

const Intro = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div
      className={`${clicked && styles.clicked} ${styles.fullscreen} ${
        styles.bg
      } font-merchant`}
    >
      <img
        className="w-[156.16px] mt-[140px]"
        src={introImage}
        alt="인트로 이미지"
      />
      <h3 className="text-[70px] leading-[68%] mt-[73px]">Are you over 18?</h3>
      <div className="flex gap-x-[32.3px] mt-[101px] text-[36px]">
        <div
          onClick={clickHandler}
          className="flex justify-center items-center w-[135px] h-[60px] skew-x-[-5deg] rounded-[3px] transition duration-[200ms] ease-in-out bg-[#FF6C18CC] hover:scale-[1.2] hover:font-bold cursor-pointer"
        >
          Yes
        </div>
        <div className="flex justify-center items-center w-[135px] h-[60px] skew-x-[-5deg] rounded-[3px] transition duration-[200ms] ease-in-out bg-black text-[#FF5C00] hover:scale-[1.2] hover:font-bold cursor-pointer">
          No
        </div>
      </div>
    </div>
  );
};

export default Intro;
