import React from 'react'
import { useResize } from 'hooks';

type Props = {}

const BarelyInStock = (props: Props) => {
  const { width } = useResize();
  return (
    <div className="mt-[clamp(40px,11.111vw,68px)] pad:mt-[clamp(68px,6.296vw,71px)] desktop:mt-[clamp(71px,3.698vw,100vw)]">
      <div className="flex justify-center items-center skew-x-[-5deg] font-bold text-black bg-gradient-to-l from-[#860000] to-[#F52C00] text-[clamp(10px,2.778vw,14px)] pad:text-[clamp(14px,1.296vw,20px)] desktop:text-[clamp(20px,1.042vw,100vw)] w-[clamp(95px,26.389vw,148.81px)] pad:w-[clamp(148.81px,13.779vw,204.37px)] desktop:w-[clamp(204.37px,10.644vw,100vw)] aspect-[204.37/34] font-exo">
        <h3 className="skew-x-[5deg]">Barley in Stock</h3>
      </div>
      <ul className="text-[#FF4D00] font-bai-jamjuree text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] mt-[clamp(9px,2.5vw,25px)] pad:mt-[25px] desktop:mt-[clamp(25px,1.042vw,100vw)] leading-[125%]">
        <li>&#x2022;&ensp;Announce Brewery (Staking System)</li>
        <li>&#x2022;&ensp;Artist Collaboration Events</li>
        <li>&#x2022;&ensp;Release Brewery (Staking System)</li>
        <li>
          &#x2022;&ensp;Open Other NFT Projects to
          {width < 1080 && (
            <>
              <br />
              &ensp;
            </>
          )}{" "}
          GangHouse
        </li>
        <li>&#x2022;&ensp;Year-End Party</li>
        <li>&#x2022;&ensp;Release Tokenomics System</li>
        <li>&#x2022;&ensp;Open BeerGang Merch Shop</li>
        <li>&#x2022;&ensp;GGC Token Sales</li>
        <li>&#x2022;&ensp;Announce Tokenomics</li>
      </ul>
    </div>
  );
}

export default BarelyInStock