import React from 'react'

const BrewingComplete = () => {
  return (
    <div className="mt-[clamp(40px,11.111vw,68px)] pad:mt-[clamp(68px,6.296vw,71px)] desktop:mt-[clamp(71px,3.698vw,100vw)]">
      <div className="flex justify-center items-center skew-x-[-5deg] font-bold text-black bg-gradient-to-l from-[#FF4D00] to-[#FF7A00] text-[clamp(10px,2.778vw,14px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(20px,1.042vw,100vw)] w-[clamp(110px,30.556vw,160px)] pad:w-[clamp(160px,14.815vw,220px)] desktop:w-[clamp(220px,11.458vw,100vw)] aspect-[220/34] font-exo">
        <h3 className="skew-x-[5deg]">Brewing Complete</h3>
      </div>
      <ul className="text-[#F97700] font-bai-jamjuree text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] mt-[clamp(9px,2.5vw,25px)] pad:mt-[25px] desktop:mt-[clamp(25px,1.042vw,100vw)] leading-[125%]">
        <li>
          &#x2022;&ensp;
          <span className="line-through">Open Official Twitter</span>
        </li>
        <li>
          &#x2022;&ensp;
          <span className="line-through">Open Official Discord</span>
        </li>
        <li>&#x2022;&ensp;Launch BeerGang Homepage</li>
        <li>&#x2022;&ensp;BeerGang NFT Sales & Reveal</li>
      </ul>
    </div>
  );
}

export default BrewingComplete