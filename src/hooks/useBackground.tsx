import React, { useCallback, useEffect, useRef, useState } from "react";

const useBackground = () => {
  const ref = useRef<any>();
  const [colorValue, setColorValue] = useState<string>(
    "radial-gradient(50% 50% at 50% 50%, #d15520 0%, #e3651e 100%)"
  );
  // let colorValue: string =
  //   "radial-gradient(50% 50% at 50% 50%, #d15520 0%, #e3651e 100%)";
  const colorHandler = useCallback(() => {
    if (ref.current) {
      console.log(ref.current.style.background);
      ref.current.style.background = colorValue;
    }
  }, [colorValue])

  // useEffect(() => {
  //   // console.log(colorValue)
  //   window.addEventListener("wheel", colorHandler)
  //   return () => window.removeEventListener("wheel", colorHandler)
  // }, [colorHandler]);


  return {
    ref,
    setColorValue
  };
};

export default useBackground;
