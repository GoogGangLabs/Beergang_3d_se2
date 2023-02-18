import React from "react";
import BeergangUniverse from "./BeergangUniverse/BeergangUniverse";
import TheFourTribes from "./TheFourTribes/TheFourTribes";
import Trailer from "./Trailer/Trailer";

const HtmlContents = ({
  getImageIndex,
}: {
  getImageIndex: (index: number) => void;
}) => {

  return (
    <>
      <div className="w-screen h-screen text-orange font-merchant min-w-[360px] z-[2]">
        {/* 페이지 2 100vh ~ 200vh */}
        <div className="absolute top-[100vh] right-[8.073vw] text-[100px]">
          Page 2 Start
        </div>
        <div className="absolute top-[146.667vh] right-[4.167vw] pad:right-[5.370vw] desktop:right-[8.281vw]  w-[clamp(188px,52.222vw,396px)] pad:w-[clamp(396px,36.667vw,615px)] desktop:w-[615px]">
          <h3 className="text-[clamp(16px,4.444vw,26px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[40px] leading-[85%]">
            <span className="text-[clamp(36px,10vw,56px)] pad:text-[clamp(56px,5.185vw,80px)] desktop:text-[80px] leading-[43%]">
              BEERGANG
            </span>
            is a 6,666 emotionally interactive 3D full-body NFT collection
            inspired by beer, crafted by GoodGang Labs.
          </h3>
        </div>
        {/* 페이지 3 200vh ~ 300vh */}
        <div className="absolute top-[200vh] left-[8.073vw] text-[100px]">
          Page 3 Start
        </div>
        <BeergangUniverse />
        {/* 페이지 4 300vh ~ 400vh */}
        <TheFourTribes getImageIndex={getImageIndex} />
        {/* 페이지 5 400vh ~ 500vh */}
        <Trailer/>
        {/* 페이지 6 500vh ~ 600vh */}
        <div className="absolute top-[500vh] left-[10vw]">
          <h3 className="text-[42px]">Page 6</h3>
        </div>
        {/* 페이지 7 600vh ~ 700vh */}
        <div className="absolute top-[600vh] left-[10vw]">
          <h3 className="text-[42px]">Page 7</h3>
        </div>
        {/* 페이지 8 700vh ~ 800vh */}
        <div className="absolute top-[700vh] left-[10vw]">
          <h3 className="text-[42px]">Page 8</h3>
        </div>
        {/* 페이지 9 800vh ~ 900vh */}
        <div className="absolute top-[800vh] left-[10vw]">
          <h3 className="text-[42px]">Page 9</h3>
        </div>
        {/* 페이지 10 900vh ~ 1000vh */}
        <div className="absolute top-[900vh] left-[10vw]">
          <h3 className="text-[42px]">Page 10</h3>
        </div>
        {/* 페이지 11 1000vh ~ 1100vh */}
        <div className="absolute top-[1000vh] left-[10vw]">
          <h3 className="text-[42px]">Page 11</h3>
        </div>
        {/* 페이지 12 1100vh ~ 1200vh */}
        <div className="absolute top-[1100vh] left-[10vw]">
          <h3 className="text-[42px]">Page 12</h3>
        </div>
        {/* 페이지 13 1200vh ~ 1300vh */}
        <div className="absolute top-[1100vh] left-[10vw]">
          <h3 className="text-[42px]">Page 13</h3>
        </div>
      </div>
    </>
  );
};

export default HtmlContents;
