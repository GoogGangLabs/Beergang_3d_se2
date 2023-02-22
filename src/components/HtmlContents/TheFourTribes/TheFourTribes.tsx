import React from "react";
import TribesExplain from "./TribesExplain";
import ColoredBar from "./ColoredBar";
import EachTribes from './EachTribes';
import EachTribesMobile from "./EachTribesMobile";

const TheFourTribes = ({
  getImageIndex,
}: {
  getImageIndex: (index: number) => void;
}) => {


  return (
    <>
      <TribesExplain />
      <div className="absolute top-[590.204vh] right-[clamp(54px,15vw,100px)] pad:right-[17.983vw] desktop:right-[20.729vw] font-medium font-exo">
        {/* four tribes 이미지 */}
        <EachTribes getImageIndex={getImageIndex} />
        <EachTribesMobile getImageIndex={getImageIndex} />
      </div>
    </>
  );
};

export default TheFourTribes;
