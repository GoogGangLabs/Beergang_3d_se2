import React from 'react'

type Props = {}

const BeergangIntro = (props: Props) => {
  return (
    <div className="absolute top-[146.667vh] right-[3.333vw] pad:right-[9.907vw] desktop:right-[10.521vw] w-[clamp(166px,46.111vw,336px)] pad:w-[clamp(336px,31.111vw,549px)] desktop:w-[clamp(549px,28.594vw,100vw)]">
      <h3 className="text-[clamp(11px,3.056vw,16px)] pad:text-[clamp(16px,1.481vw,26px)] desktop:text-[clamp(26px,1.354vw,100vw)] leading-[125%]">
        BeerGang is a 6,666 emotionally interactive 3D full-body NFT collection
        inspired by beer, crafted by GoodGang Labs.
      </h3>
    </div>
  );
}

export default BeergangIntro