import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { imageVisibleState } from "store/atoms";
import ColoredBar from './ColoredBar';

const EachTribes = () => {
  const [imageVisible ,setImageVisible] = useRecoilState(imageVisibleState);
  const onMouseLeave = (e: any) => {
    e.stopPropagation();
    setImageVisible(0);
  };

  useEffect(() => {
    console.log(imageVisible)
  }, [imageVisible])

  return (
    <>
      <div className="hidden pad:flex items-center pad:gap-x-[clamp(11px,1.019vw,15px)] desktop:gap-x-[clamp(15px,0.781vw,100vw)] pad:mt-[clamp(48px,4.444vw,69px)] desktop:mt-[clamp(69px,3.594vw,100vw)]">
        <div
          className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] pad:w-[clamp(68.47px,6.340vw,100px)] desktop:w-[clamp(100px,5.208vw,100vw)] cursor-pointer"
          onMouseOver={() => setImageVisible(1)}
          onMouseLeave={onMouseLeave}
        >
          <h3 className="text-[clamp(13px,3.611vw,17px)] pad:text-[clamp(17px,1.574vw,24px)] desktop:text-[clamp(24px,1.25vw,100vw)] text-[#CB6100] font-bold">
            Lyquid
          </h3>
          <h4 className="text-[#874100] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[clamp(14px,0.729vw,100vw)] mt-[clamp(3.4px,0.944vw,6.54px)] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[clamp(12px,0.625vw,100vw)]">
            5.0%
            <span className="text-[clamp(6px,1.667vw,9px)] pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[clamp(11px,0.573vw,100vw)]">
              {" "}
              ABV
            </span>
          </h4>
        </div>
        <ColoredBar bg="pad:from-[#CB6100] pad:to-[#1A6DBA]" />
        <div
          className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] pad:w-[clamp(68.47px,6.340vw,100px)] desktop:w-[clamp(100px,5.208vw,100vw)] cursor-pointer"
          onMouseOver={() => setImageVisible(2)}
          onMouseLeave={onMouseLeave}
        >
          <h3 className="text-[clamp(13px,3.611vw,17px)] pad:text-[clamp(17px,1.574vw,24px)] desktop:text-[clamp(24px,1.25vw,100vw)] text-[#1A6DBA] font-bold">
            CloudX
          </h3>
          <h4 className="text-[#16548D] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[clamp(14px,0.729vw,100vw)] mt-[clamp(3.4px,0.944vw,6.54px)] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[clamp(12px,0.625vw,100vw)]">
            8.2%
            <span className="text-[clamp(6px,1.667vw,9px)] pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[clamp(11px,0.573vw,100vw)]">
              {" "}
              ABV
            </span>
          </h4>
        </div>
        <ColoredBar bg="pad:from-[#1A6DBA] pad:to-[#C60E0E]" />
      </div>
      <div className="hidden pad:flex items-center pad:mt-[clamp(37.66px,3.487vw,46px)] desktop:mt-[clamp(55px,2.865vw,100vw)] pad:gap-x-[clamp(11px,1.019vw,15px)] desktop:gap-x-[clamp(15px,0.781vw,100vw)]">
        <ColoredBar bg="pad:from-[#CB6100] pad:to-[#88766E]" />
        <div
          className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] pad:w-[clamp(68.47px,6.340vw,100px)] desktop:w-[clamp(100px,5.208vw,100vw)] cursor-pointer"
          onMouseOver={() => setImageVisible(3)}
          onMouseLeave={onMouseLeave}
        >
          <h3 className="text-[clamp(13px,3.611vw,17px)] pad:text-[clamp(17px,1.574vw,24px)] desktop:text-[clamp(24px,1.25vw,100vw)] text-[#88766E] font-bold">
            Staut
          </h3>
          <h4 className="text-[#68574F] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[clamp(14px,0.729vw,100vw)] mt-[clamp(3.4px,0.944vw,6.54px)] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[clamp(12px,0.625vw,100vw)]">
            5.5%
            <span className="text-[clamp(6px,1.667vw,9px)] pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[clamp(11px,0.573vw,100vw)]">
              {" "}
              ABV
            </span>
          </h4>
        </div>
        <ColoredBar bg="pad:from-[#956049] pad:to-[#C60E0E]" />
        <div
          className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] pad:w-[clamp(68.47px,6.340vw,100px)] desktop:w-[clamp(100px,5.208vw,100vw)] cursor-pointer"
          onMouseOver={() => setImageVisible(4)}
          onMouseLeave={onMouseLeave}
        >
          <h3 className="text-[clamp(13px,3.611vw,17px)] pad:text-[clamp(17px,1.574vw,24px)] desktop:text-[clamp(24px,1.25vw,100vw)] text-[#C60E0E] font-bold">
            RedPool
          </h3>
          <h4 className="text-[#9F1313] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[clamp(14px,0.729vw,100vw)] mt-[clamp(3.4px,0.944vw,6.54px)] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[clamp(12px,0.625vw,100vw)]">
            10.7%
            <span className="text-[clamp(6px,1.667vw,9px)] pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[clamp(11px,0.573vw,100vw)]">
              {" "}
              ABV
            </span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default EachTribes;
