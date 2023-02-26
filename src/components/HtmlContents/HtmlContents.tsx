import React from "react";
import BeergangUniverse from "./BeergangUniverse/BeergangUniverse";
import Footer from "./Footer/Footer";
import OurRoadmap from "./OurRoadmap/OurRoadmap";
import ScrollLottie from "./ScrollLottie/ScrollLottie";
import TheFourTribes from "./TheFourTribes/TheFourTribes";
import Trailer from "./Trailer/Trailer";
import BeergangIntro from './BeergangIntro/BeergangIntro';
import ComingSoon from "components/ComingSoon/ComingSoon";
const HtmlContents = () => {
  return (
    <>
      <div className="w-screen h-screen text-[#FF5C00] font-bai-jamjuree min-w-[360px] flex justify-center items-center">
        <Trailer />
        <ScrollLottie />
        <BeergangIntro/>
        <BeergangUniverse />
        <TheFourTribes/>
        <OurRoadmap />
        <ComingSoon/>
        <Footer />
      </div>
    </>
  );
};

export default HtmlContents;
