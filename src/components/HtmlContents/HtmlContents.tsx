import ImageContext from 'context/ImageContext';
import React, { useContext } from 'react'
import { useSetRecoilState } from 'recoil'
import { imageVisibleState } from 'store/fourTribes'

const HtmlContents = ({getImageIndex}: {getImageIndex: (index:number) => void}) => {
  const setImageVisible = useSetRecoilState(imageVisibleState);
  // const { imageVisibleHandler, imageInvisibleHandler } = useContext(ImageContext);

  const onMouseLeave = (e:any) => {
    e.stopPropagation();
    console.log("내려갔음.")
    // imageInvisibleHandler();
    getImageIndex(0)
  }

  return (
    <div className="text-white w-screen">
      {/* 페이지 2 100vh ~ 200vh */}
      <div className="absolute top-[100vh] left-[60vw] w-[520px]">
        <h3 className="text-[42px]">Web3 Avatar Communication</h3>
        <h4 className="text-[18px] mt-[30px] leading-[150%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          soluta aperiam ullam qui at iure rerum neque voluptatum sunt, eos quas
          beatae eaque commodi vero illum deserunt incidunt magnam esse?
        </h4>
      </div>
      {/* 페이지 3 200vh ~ 300vh */}
      <div className="absolute top-[200vh] left-[10vw]">
        <h3 className="text-[42px]">Web3 Avatar Communication</h3>
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