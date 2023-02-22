import React from "react";
import BeergangUniverse from "./BeergangUniverse/BeergangUniverse";
import Footer from "./Footer/Footer";
import OurRoadmap from "./OurRoadmap/OurRoadmap";
import ScrollLottie from "./ScrollLottie/ScrollLottie";
import TheFourTribes from "./TheFourTribes/TheFourTribes";
import Trailer from "./Trailer/Trailer";
const HtmlContents = ({
  getImageIndex,
}: {
  getImageIndex: (index: number) => void;
}) => {
  return (
    <>
      <div className="w-screen h-[1300vh] text-[#FF5C00] font-bai-jamjuree min-w-[360px] z-[2]">
        <ScrollLottie />
        {/* 페이지 2 100vh ~ 200vh */}
        <div className="absolute top-[100vh] right-[8.073vw] text-[100px]">
          Page 2 Start
        </div>
        <div className="absolute top-[146.667vh] right-[3.333vw] pad:right-[9.907vw] desktop:right-[10.521vw] w-[clamp(166px,46.111vw,336px)] pad:w-[clamp(336px,31.111vw,549px)] desktop:w-[clamp(549px,28.594vw,100vw)]">
          <h3 className="text-[clamp(11px,3.056vw,16px)] pad:text-[clamp(16px,1.481vw,26px)] desktop:text-[clamp(26px,1.354vw,100vw)] leading-[125%]">
            BeerGang is a 6,666 emotionally interactive 3D full-body NFT
            collection inspired by beer, crafted by GoodGang Labs.
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
        <Trailer />
        {/* 페이지 6 500vh ~ 600vh */}
        <OurRoadmap />
        {/* 페이지 7 600vh ~ 700vh */}
        <div className="absolute top-[600vh] left-[17.135vw]">
          <h3 className="text-[42px]">Page 7</h3>
        </div>
        <div className="absolute top-[650vh] left-[17.135vw]">
          <h3 className="pad:text-[clamp(58px,5.370vw,72px)] desktop:text-[clamp(72px,3.750vw,100vw)] leading-[68%]">
            Many more
            <br />
            to come...
          </h3>
        </div>
        {/* Footer */}
        <Footer />

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
