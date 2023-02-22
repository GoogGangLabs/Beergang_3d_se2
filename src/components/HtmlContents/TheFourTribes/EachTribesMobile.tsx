import React from "react";
import ColoredBar from "./ColoredBar";

const EachTribesMobile = ({
  getImageIndex,
}: {
  getImageIndex: (index: number) => void;
}) => {
  const onMouseLeave = (e: any) => {
    e.stopPropagation();
    // imageInvisibleHandler();
    getImageIndex(0);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-[25px] pad:hidden">
      <div
        className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] cursor-pointer"
        onMouseOver={() => getImageIndex(1)}
        onMouseLeave={onMouseLeave}
      >
        <h3 className="text-[clamp(13px,3.611vw,17px)] text-[#CB6100] font-bold">
          Lyquid
        </h3>
        <h4
          className="text-[#874100] font-bai-jamjuree tracking-[.04em] text-[clamp(18px,2.5vw,22px)] mt-[clamp(14px,3.889vw,19px)]"
          style={{ zoom: "0.52" }}
        >
          5.0%
          <span className="text-[clamp(12px,3.333vw,15px)]"> ABV</span>
        </h4>
      </div>
      <ColoredBar bg="from-[#CB6100] to-[#88766E]" />
      <div
        className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] cursor-pointer"
        onMouseOver={() => getImageIndex(3)}
        onMouseLeave={onMouseLeave}
      >
        <h3 className="text-[clamp(13px,3.611vw,17px)] text-[#88766E] font-bold">
          Staut
        </h3>
        <h4 className="text-[#68574F] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] mt-[clamp(3.4px,0.944vw,6.54px)]">
          5.5%
          <span className="text-[clamp(6px,1.667vw,9px)]"> ABV</span>
        </h4>
      </div>
      <ColoredBar bg="from-[#88766E] to-[#1A6DBA]" />
      <div
        className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] cursor-pointer"
        onMouseOver={() => getImageIndex(2)}
        onMouseLeave={onMouseLeave}
      >
        <h3 className="text-[clamp(13px,3.611vw,17px)] text-[#1A6DBA] font-bold">
          CloudX
        </h3>
        <h4 className="text-[#16548D] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] mt-[clamp(3.4px,0.944vw,6.54px)]">
          8.2%
          <span className="text-[clamp(6px,1.667vw,9px)]"> ABV</span>
        </h4>
      </div>
      <ColoredBar bg="from-[#1A6DBA] to-[#C60E0E]" />
      <div
        className="flex flex-col items-center w-[clamp(56px,15.556vw,68.47px)] cursor-pointer"
        onMouseOver={() => getImageIndex(4)}
        onMouseLeave={onMouseLeave}
      >
        <h3 className="text-[clamp(13px,3.611vw,17px)] text-[#C60E0E] font-bold">
          RedPool
        </h3>
        <h4 className="text-[#9F1313] font-bai-jamjuree tracking-[.04em] text-[clamp(9px,2.5vw,11px)] mt-[clamp(3.4px,0.944vw,6.54px)]">
          10.7%
          <span className="text-[clamp(6px,1.667vw,9px)]"> ABV</span>
        </h4>
      </div>
    </div>
  );
};

export default EachTribesMobile;
