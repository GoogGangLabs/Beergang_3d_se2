import React from "react";
import bar1 from "assets/svg/bar-1.svg";
import bar2 from "assets/svg/bar-2.svg";
import bar3 from "assets/svg/bar-3.svg";
import bar4 from "assets/svg/bar-4.svg";

const TheFourTribes = ({
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
    <>
      <div className="absolute top-[326.204vh] pad:right-[10vw] desktop:right-[14.688vw]">
        <h3 className="pad:text-[clamp(56px,5.185vw,80px)] desktop:text-[80px]">
          THE FOUR TRIBES
        </h3>
        <h4 className="pad:w-[clamp(444px,41.111vw,635px)] desktop:w-[635px] pad:text-[clamp(12px,1.111vw,22px)] desktop:text-[22px] pad:leading-[150%] desktop:leading-[125%] pad:mt-[clamp(10px,0.926vw,19px)] desktop:mt-[19px] font-light font-bai-jamjuree">
          BeerGang is a tribe with the longest history that carried on the pure
          lineage of a brewery. They formed their livelihoods near the Tipsy
          River, the longest river that flows across The Alcohol Planet.
          <span className="font-semibold">
            They are largely composed of four tribes,
          </span>
        </h4>
        {/* four tribes 이미지 */}
        <div className="flex pad:mt-[clamp(60px,5.556vw,127px)] desktop:mt-[127px]">
          <div
            className="flex flex-col items-center pad:left-[clamp(2px,0.185vw,10px)] desktop:left-[10px] pad:w-[clamp(95.29px,8.823vw,128px)] desktop:w-[128px] cursor-pointer"
            onMouseOver={() => getImageIndex(1)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="pad:text-[clamp(30px,2.778vw,40px)] desktop:text-[40px] text-[#CB6100]">
              Lyquid
            </h3>
            <h4 className="text-[#874100] font-bai-jamjuree tracking-[.04em] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[16px] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[12px]">
              5.0%
              <span className="pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[11px]">
                ABV
              </span>
            </h4>
          </div>
          <img
            className="pad:mb-[clamp(16px,1.481vw,20px)] desktop:mb-[13px] pad:w-[clamp(106.39px,9.851vw,163px)] desktop:w-[163px]"
            src={bar1}
            alt="bar-1"
          />
          <div
            className="flex flex-col items-center pad:w-[clamp(84.85px,7.856vw,134px)] desktop:w-[134px] cursor-pointer"
            onMouseOver={() => getImageIndex(2)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="pad:text-[clamp(30px,2.778vw,40px)] desktop:text-[40px] text-[#1A6DBA]">
              CloudX
            </h3>
            <h4 className="text-[#16548D] font-bai-jamjuree tracking-[.04em] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[16px] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[12px]">
              8.2%
              <span className="pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[11px]">
                ABV
              </span>
            </h4>
          </div>
          <img
            className="pad:mb-[clamp(16px,1.481vw,20px)] desktop:mb-[13px] pad:w-[clamp(106.39px,9.851vw,163px)] desktop:w-[163px]"
            src={bar2}
            alt="bar-2"
          />
        </div>
        <div className="flex pad:mt-[clamp(33.29px,3.082vw,46px)] desktop:mt-[46px]">
          <img
            className="pad:mb-[clamp(16px,1.481vw,20px)] desktop:mb-[13px]"
            src={bar3}
            alt="bar-3"
          />
          <div
            className="flex flex-col items-center pad:w-[clamp(90px,8.333vw,138px)] desktop:w-[138px] cursor-pointer"
            onMouseOver={() => getImageIndex(3)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="pad:text-[clamp(30px,2.778vw,40px)] desktop:text-[40px] text-[#88766E]">
              Staut
            </h3>
            <h4 className="text-[#68574F] font-bai-jamjuree tracking-[.04em] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[16px] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[12px]">
              5.5%
              <span className="pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[11px]">
                ABV
              </span>
            </h4>
          </div>
          <img
            className="pad:mb-[clamp(16px,1.481vw,20px)] desktop:mb-[13px] pad:w-[clamp(107.04px,9.911vw,164px)] desktop:w-[164px]"
            src={bar4}
            alt="bar-4"
          />
          <div
            className="flex flex-col items-center pad:w-[clamp(84.85px,7.856vw,130px)] desktop:w-[130px] pad:ml-[clamp(6.74px,0.624vw,10px)] desktop:ml-[10px] cursor-pointer"
            onMouseOver={() => getImageIndex(4)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="pad:text-[clamp(30px,2.778vw,40px)] desktop:text-[40px] text-[#C60E0E]">
              RedPool
            </h3>
            <h4 className="text-[#9F1313] font-bai-jamjuree tracking-[.04em] pad:text-[clamp(11px,1.019vw,16px)] desktop:text-[16px] pad:mt-[clamp(6.54px,0.606vw,12px)] desktop:mt-[12px]">
              10.7%
              <span className="pad:text-[clamp(9px,0.833vw,11px)] desktop:text-[11px]">
                ABV
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheFourTribes;
