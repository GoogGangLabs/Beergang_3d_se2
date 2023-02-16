import React from "react";
import bar1 from "assets/svg/bar-1.svg";
import bar2 from "assets/svg/bar-2.svg";
import bar3 from "assets/svg/bar-3.svg";
import bar4 from "assets/svg/bar-4.svg";

const HtmlContents = ({
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
    <div className="text-white w-screen text-orange font-merchant">
      {/* 페이지 2 100vh ~ 200vh */}
      <div className="absolute top-[100vh] right-[8.073vw] text-[100px]">
        Page 2 Start
      </div>
      <div className="absolute top-[146.667vh] right-[8.073vw]">
        <h3 className="text-[40px] leading-[85%]">
          <span className="text-[80px] leading-[43%]">BEERGANG</span> is a 10k
          emotionally
          <br />
          interactive full-body NFT Collection for
          <br />
          Creators, NFT Collectors and Beer-lovers.
        </h3>
      </div>
      {/* 페이지 3 200vh ~ 300vh */}
      <div className="absolute top-[200vh] left-[8.073vw] text-[100px]">
        Page 3 Start
      </div>
      <div className="absolute top-[226.204vh] left-[11.771vw]">
        <h3 className="text-[80px]">THE FOUR TRIBES</h3>
        <h4 className="text-[22px] leading-[125%] font-light font-bai-jamjuree">
          BeerGang is a tribe with the longest history that carried on the
          <br />
          pure lineage of a brewery. They formed their livelihoods near
          <br />
          the Tipsy River, the longest river that flows across The Alcohol
          <br />
          Planet.{" "}
          <span className="font-semibold">
            They are largely composed of four tribes,
          </span>
        </h4>
      </div>
      <div className="absolute top-[255.370vh] left-[11.042vw]">
        <div className="flex">
          <div
            className="flex flex-col items-center w-[146px] cursor-pointer"
            onMouseOver={() => getImageIndex(1)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="text-[40px] text-[#CB6100]">Lyquid</h3>
            <h4 className="text-[20px] text-[#874100] font-bai-jamjuree tracking-[.04em]">
              5.0% <span className="text-[11px]">ABV</span>
            </h4>
          </div>
          <img className="mb-[13px]" src={bar1} alt="bar-1" />
          <div
            className="flex flex-col items-center w-[130px] cursor-pointer"
            onMouseOver={() => getImageIndex(2)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="text-[40px] text-[#1A6DBA]">CloudX</h3>
            <h4 className="text-[20px] text-[#16548D] font-bai-jamjuree tracking-[.04em]">
              8.2% <span className="text-[11px]">ABV</span>
            </h4>
          </div>
          <img className="mb-[13px]" src={bar2} alt="bar-2" />
        </div>
        <div className="flex justify-end mt-[46px]">
          <img className="mb-[13px]" src={bar3} alt="bar-3" />
          <div
            className="flex flex-col items-center w-[118px] cursor-pointer"
            onMouseOver={() => getImageIndex(3)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="text-[40px] text-[#88766E]">Staut</h3>
            <h4 className="text-[20px] text-[#68574F] font-bai-jamjuree tracking-[.04em]">
              5.5% <span className="text-[11px]">ABV</span>
            </h4>
          </div>
          <img className="mb-[13px]" src={bar4} alt="bar-4" />
          <div
            className="flex flex-col items-center ml-[25px] cursor-pointer"
            onMouseOver={() => getImageIndex(4)}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="text-[40px] text-[#C60E0E]">RedPool</h3>
            <h4 className="text-[20px] text-[#9F1313] font-bai-jamjuree tracking-[.04em]">
              10.7% <span className="text-[11px]">ABV</span>
            </h4>
          </div>
        </div>
      </div>
      {/* 페이지 4 300vh ~ 400vh */}
      <div className="absolute top-[333.148vh] right-[12.708vw]">
        <h3 className="text-[80px]">GANG BREWERY</h3>
        <h4 className="text-[22px] leading-[125%] font-light font-bai-jamjuree mt-[33px]">
          Each Beergang is unique generated from over 170 possible<br />traits,
          including expression, headwear, clothing, and more. All<br />apes are dope,
          but some are rarer than others. The apes are<br />stored as ERC-721 tokens
          on the Dosi blockchain and hosted<br />on IPFS. To access members-only
          areas such as Apeholders<br />will need to be signed into their Metamask
          Wallet.
        </h4>
      </div>
      {/* 페이지 5 400vh ~ 500vh */}
      <div className="absolute top-[400vh] left-[10vw]">
        <h3 className="text-[42px]">Page 5</h3>
        <h4 className="text-[18px] mt-[30px] leading-[150%]">Lorem, ipsum</h4>
      </div>
      <div className="absolute top-[500vh] left-[10vw]">
        <h3 className="text-[42px]">Page 6</h3>
        <h4 className="text-[18px] mt-[30px] leading-[150%]">Lorem, ipsum</h4>
      </div>
    </div>
  );
};

export default HtmlContents;
