import { useProgress } from "@react-three/drei";
import * as React from "react";
import beerBubblesLottie from "assets/json/BeerBubbles.json";
import Lottie from "lottie-react";
import styles from "./CustomLoader.module.css";
import { useRecoilState } from "recoil";
import { introAcceptedState } from "store/atoms";

interface LoaderOptions {
  containerStyles: any;
  innerStyles: any;
  barStyles: any;
  dataStyles: any;
  dataInterpolation: (p: number) => string;
  initialState: (active: boolean) => boolean;
}

const defaultDataInterpolation = (p: number) => `${p.toFixed(0)}%`;

export default function CustomLoader({
  containerStyles,
  innerStyles,
  barStyles,
  dataStyles,
  dataInterpolation = defaultDataInterpolation,
  initialState = (active: boolean) => active,
}: Partial<LoaderOptions>) {
  const { active, progress } = useProgress();
  const progressRef = React.useRef(0);
  const rafRef = React.useRef(0);
  const progressSpanRef = React.useRef<HTMLSpanElement>(null);
  const [shown, setShown] = React.useState(true);
  const [trans, setTrans] = React.useState(true);
  const [clicked, setClicked] = useRecoilState(introAcceptedState);

  React.useEffect(() => {
    let t: any;
    let l: any;
    if (active !== shown)
      t = setTimeout(() => {
        setShown(active);
      }, 1000);
      l = setTimeout(() => {
        setTrans(active);
      }, 1700);
    return () => {
       clearTimeout(t);
       clearTimeout(l);
    };
  }, [shown, active]);

  const updateProgress = React.useCallback(() => {
    if (!progressSpanRef.current) return;
    progressRef.current += (progress - progressRef.current) / 2;
    if (progressRef.current > 0.95 * progress || progress === 100)
      progressRef.current = progress;
    progressSpanRef.current.innerText = dataInterpolation(progressRef.current);
    if (progressRef.current < progress)
      rafRef.current = requestAnimationFrame(updateProgress);
  }, [dataInterpolation, progress]);

  React.useEffect(() => {
    updateProgress();
    return () => cancelAnimationFrame(rafRef.current);
  }, [updateProgress]);

  return shown ? (
    <div
      className={`font-merchant min-w-[360px] ${styles.container}`}
      style={{
        opacity: trans ? 1 : 0,
        // ...containerStyles,
      }}
    >
      <p className="z-[3000] text-[clamp(18px,5vw,26px)] pad:text-[clamp(26px,2.407vw,30px)] desktop:text-[clamp(30px,1.563vw,100vw)] leading-[68%]">
        ABV
      </p>
      <span
        className="z-[3000] text-[clamp(38px,10.556vw,60px)] pad:text-[clamp(60px,5.556vw,70px)] desktop:text-[clamp(70px,3.646vw,100vw)] leading-[88%]"
        ref={progressSpanRef}
      />
      <Lottie
        className="absolute mb-[clamp(30px,8.333vw,50px)] pad:mb-[clamp(50px,4.630vw,70px)] desktop:mb-[clamp(70px,3.646vw,100vw)] w-[188px] pad:w-[clamp(188px,17.407vw,224px)] desktop:w-[clamp(224px,11.667vw,100vw)] z-[2999]"
        animationData={beerBubblesLottie}
        loop
        autoPlay={true}
      />
    </div>
  ) : null;
}
