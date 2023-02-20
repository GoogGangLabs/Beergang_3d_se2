import { useProgress } from "@react-three/drei";
import * as React from "react";
import beerBubblesLottie from "assets/json/BeerBubbles.json";
import Lottie from "lottie-react";

interface LoaderOptions {
  containerStyles: any;
  innerStyles: any;
  barStyles: any;
  dataStyles: any;
  dataInterpolation: (p: number) => string;
  initialState: (active: boolean) => boolean;
}

const defaultDataInterpolation = (p: number) => `${p.toFixed(2)}%`;

export default function Loader({
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
  const [shown, setShown] = React.useState(initialState(active));

  React.useEffect(() => {
    let t: any;
    if (active !== shown) t = setTimeout(() => setShown(active), 1000);
    return () => clearTimeout(t);
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
      className="z-[3000]"
      style={{
        ...styles.container,
        opacity: shown ? 1 : 0,
        ...containerStyles,
      }}
    >

      <p className="z-[3]">ABV</p>
      <span className="z-[3]" ref={progressSpanRef} />
      <Lottie
        className="absolute mb-[100px] w-[224px] z-[2]"
        animationData={beerBubblesLottie}
        loop
        autoPlay={true}
      />
    </div>
  ) : null;
}

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "radial-gradient(50% 50% at 50% 50%, #C63B00 0%, #C84800 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "opacity 300ms ease",
    zIndex: 1000,
  },
};
