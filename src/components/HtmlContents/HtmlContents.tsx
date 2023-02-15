import ImageContext from 'context/ImageContext';
import React, { useContext } from 'react'
import { useSetRecoilState } from 'recoil'
import { imageVisibleState } from 'store/fourTribes'

const HtmlContents = ({getImageIndex}: {getImageIndex: (index:number) => void}) => {
  const setImageVisible = useSetRecoilState(imageVisibleState);
  // const { imageVisibleHandler, imageInvisibleHandler } = useContext(ImageContext);

  const onMouseLeave = (e:any) => {
    e.stopPropagation();
    // imageInvisibleHandler();
    getImageIndex(0)
  }

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
      <div className="absolute top-[226.204vh] left-[10vw]">
        <h3 className="text-[80px]">THE FOUR TRIBES</h3>
        <h4 className="text-[22px] leading-[125%] font-light font-bai-jamjuree">
          BeerGang is a tribe with the longest history that carried on the
          <br />
          pure lineage of a brewery. They formed their livelihoods near
          <br />
          the Tipsy River, the longest river that flows across The Alcohol
          <br />
          Planet. <span className="font-semibold">They are largely composed of four tribes,</span>
        </h4>
        <h4
          className="text-[18px] mt-[30px] leading-[150%] text-[30px]"
          onMouseOver={() => getImageIndex(1)}
          onMouseLeave={onMouseLeave}
          // onMouseOut={onMouseLeave}
        >
          lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
          lorem Ipsum lorem Ipsum
        </h4>
        <h4
          className="text-[18px] mt-[30px] leading-[150%] text-[30px]"
          onMouseOver={() => getImageIndex(2)}
          onMouseLeave={onMouseLeave}
        >
          lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
          lorem Ipsum lorem Ipsum
        </h4>
      </div>
      {/* 페이지 4 300vh ~ 400vh */}
      <div className="absolute top-[300vh] left-[10vw]">
        <h3 className="text-[42px]">Page 4</h3>
        <h4 className="text-[18px] mt-[30px] leading-[150%]">Lorem, ipsum</h4>
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
}

export default HtmlContents