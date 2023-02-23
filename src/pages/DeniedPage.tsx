import React, { cloneElement, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./DeniedPage.module.css";
import accessDeniedImage from "assets/svg/access-denied.svg";
import { useRecoilState } from "recoil";
import { introDeniedState } from "store/atoms";
import gsap from "gsap";
import { Bounce } from "gsap/all";

const DeniedPage = () => {
  const ref = useRef<any>();
  const [denied, setDenied] = useRecoilState(introDeniedState);

  useLayoutEffect(() => {
    if (denied) {
      
      gsap.to(ref.current.style, {
        transform: "translateX(0vw)",
        duration: 0.1,
        ease: "power1.inOut",
      });
    } else {
      ref.current.style.transform = "translateX(150vw)";
    }
  }, [denied]);

  return (
    <div
      ref={ref}
      className={`${styles.fullscreen} ${styles.bg} font-merchant min-w-[360px]`}
      // min-h-[119.722vw] pad:min-h-[47.222vw] desktop:min-h-[34.063vw]
      // min-h 수정 필요
    >
      <img
        className="w-[clamp(102px,28.333vw,148px)] pad:w-[clamp(148px,13.704vw,180px)] desktop:w-[clamp(180px,9.375vw,100vw)] mt-[clamp(91px,25.278vw,91px)] pad:mt-[clamp(73px,6.759vw,128px)] desktop:mt-[clamp(128px,6.667vw,100vw)] bg-blend-multiply"
        style={{
          filter:
            "invert(0%) sepia(25%) saturate(830%) hue-rotate(335deg) brightness(80%) contrast(100%) drop-shadow(3px 3px 8px rgba(0, 0, 0, 0.2))",
        }}
        src={accessDeniedImage}
        alt="인트로 이미지"
      />
      <h3 className="text-[clamp(38px,10.556vw,52px)] pad:text-[clamp(52px,4.815vw,70px)] desktop:text-[clamp(70px,3.646vw,100vw)] mt-[clamp(66px,18.333vw,66px)] pad:mt-[64px] desktop:mt-[clamp(64px,3.333vw,100vw)] leading-[68%]">
        ACCESS DENIED
      </h3>
      <h4 className="w-[clamp(209px,58.056vw,431px)] pad:w-[clamp(431px,39.907vw,543px)] desktop:w-[clamp(543px,28.281vw,100vw)] text-[clamp(18px,5vw,26px)] pad:text-[clamp(26px,2.407vw,36px)] desktop:text-[clamp(36px,1.875vw,100vw)] mt-[clamp(29px,8.056vw,31px)] pad:mt-[31px] desktop:mt-[clamp(26px,1.354vw,100vw)] leading-[83.3%] text-center">
        Sorry, you're not able to access BeerGang, come back & try it with your
        guardians.
      </h4>
      <div
        onClick={() => setDenied(false)}
        className="flex justify-center items-center w-[clamp(103.55px,28.764vw,146.82px)] pad:w-[clamp(146.82px,13.594vw,176.18px)] desktop:w-[clamp(176.18px,9.176vw,100vw)] mt-[clamp(31px,8.611vw,56px)] pad:mt-[clamp(56px,5.185vw,64px)] desktop:mt-[clamp(64px,3.333vw,100vw)] text-[clamp(26px,7.222vw,30px)] pad:text-[clamp(30px,2.778vw,36px)] desktop:text-[clamp(36px,1.875vw,100vw)] aspect-[176.18/60] skew-x-[-5deg] rounded-[3px] transition duration-[200ms] ease-in-out bg-black text-[#FF5C00] hover:scale-[1.2] hover:font-bold cursor-pointer"
      >
        <h3 className="skew-x-[5deg]">Back</h3>
      </div>
    </div>
  );
};

export default DeniedPage;
