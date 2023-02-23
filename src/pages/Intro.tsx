import React, {
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import styles from "./Intro.module.css";
import introImage from "../assets/png/intro-image.webp";
import { useRecoilState, useSetRecoilState } from "recoil";
import { introAcceptedState, introDeniedState } from "store/atoms";
import DeniedPage from "./DeniedPage";

const Intro = () => {
  const [clicked, setClicked] = useRecoilState(introAcceptedState);
  const ref = useRef<any>();
  const setDenied = useSetRecoilState(introDeniedState);

  const clickHandler = () => {
    setClicked((prev) => true);
  };

  useLayoutEffect(() => {
    if (clicked) {
      gsap.to(ref.current.style, {
        transform: "translateY(-150vh)",
        duration: 0.1,
        ease: "power4.out",
      });
    } else {
      ref.current.style.transform = "translateY(0)";
    }
  }, [clicked]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        ref={ref}
        className={`${clicked && styles.clicked} ${styles.fullscreen} ${
          styles.bg
        } font-merchant min-w-[360px]`}
        // min-h-[119.722vw] pad:min-h-[47.222vw] desktop:min-h-[34.063vw]
      >
        <img
          className="w-[clamp(73.5px,20.417vw,125.84px)] pad:w-[clamp(125.84px,11.652vw,156.16px)] desktop:w-[clamp(156.16px,8.133vw,100vw)] mt-[clamp(77.34px,21.483vw,83.13px)] pad:mt-[clamp(83.13px,7.697vw,140px)] desktop:mt-[clamp(140px,7.292vw,100vw)] aspect-[156.16/222] bg-blend-hard-light"
          src={introImage}
          alt="인트로 이미지"
          style={{
            filter:
              "invert(0%) sepia(30%) saturate(450%) hue-rotate(345deg) brightness(100%) contrast(100%)",
          }}
        />
        <h3 className="text-[clamp(38px,10.556vw,52px)] pad:text-[clamp(52px,4.815vw,70px)] desktop:text-[clamp(70px,3.646vw,100vw)] mt-[clamp(60.3px,16.750vw,60.3px)] pad:mt-[clamp(42px,3.889vw,73px)] desktop:mt-[clamp(73px,3.802vw,100vw)] leading-[68%]">
          Are you over 18?
        </h3>
        <div className="flex gap-x-[clamp(20.45px,5.681vw,42px)] pad:gap-x-[clamp(42px,3.889vw,100vw)] desktop:gap-x-[clamp(32.3px,1.682vw,100vw)] mt-[clamp(75px,20.833vw,75px)] pad:mt-[clamp(75px,6.944vw,101px)] desktop:mt-[clamp(101px,5.260vw,100vw)] text-[clamp(26px,7.222vw,30px)] pad:text-[clamp(30px,2.778vw,36px)] desktop:text-[clamp(36px,1.875vw,100vw)]">
          <div
            onClick={clickHandler}
            className="flex justify-center items-center w-[clamp(85.6px,23.778vw,112.56px)] pad:w-[clamp(112.56px,10.422vw,135px)] desktop:w-[clamp(135px,7.031vw,100vw)] aspect-[135/60] skew-x-[-5deg] rounded-[3px] transition duration-[200ms] ease-in-out bg-[#FF6C18CC] hover:scale-[1.2] hover:font-bold cursor-pointer"
          >
            <h3 className="skew-x-[5deg]">Yes</h3>
          </div>
          <div
            onClick={() => setDenied(true)}
            className="flex justify-center items-center w-[clamp(85.6px,23.778vw,112.56px)] pad:w-[clamp(112.56px,10.422vw,135px)] desktop:w-[clamp(135px,7.031vw,100vw)] aspect-[135/60] skew-x-[-5deg] rounded-[3px] transition duration-[200ms] ease-in-out bg-black text-[#FF5C00] hover:scale-[1.2] hover:font-bold cursor-pointer"
          >
            <h3 className="skew-x-[5deg]">No</h3>
          </div>
        </div>
        <DeniedPage />
      </div>
    </div>
  );
};

export default Intro;
