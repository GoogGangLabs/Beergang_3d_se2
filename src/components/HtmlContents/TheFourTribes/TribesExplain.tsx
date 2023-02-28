import { useResize, useScrollText } from 'hooks';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageNumState } from 'store/atoms';
import EachTribes from './EachTribes';

const TribesExplain = () => {
  const pageNum = useRecoilValue(pageNumState);
  const { width } = useResize();
  const ref = useScrollText(
    12 / pageNum,
    0.4/ pageNum,
    (width >= 1080 ? 15 : 13) / pageNum,
    0.4 / pageNum
  );
  return (
    <div ref={ref} className="absolute top-[32.969vh] pad:top-[29.297vh] desktop:top-[27.407vh] right-[3.889vw] pad:right-[16.481vw] desktop:right-[18.906vw]">
      <h3 className="text-[clamp(24px,6.667vw,30px)] pad:text-[clamp(38px,3.519vw,62px)] desktop:text-[clamp(62px,3.229vw,100vw)] font-merchant">
        THE FOUR TRIBES
      </h3>
      <h4 className="w-[clamp(160px,44.444vw,190px)] pad:w-[clamp(367px,33.981vw,544px)] desktop:w-[clamp(544px,28.333vw,100vw)] text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] leading-[125%] mt-[clamp(13px,3.611vw,18px)] pad:mt-[clamp(10px,0.926vw,19px)] desktop:mt-[clamp(19px,0.99vw,100vw)] font-light font-bai-jamjuree">
        BeerGang is a tribe with the longest history that carried on the pure
        lineage of a brewery. They formed their livelihoods near the Tipsy
        River, the longest river that flows across The Alcohol Planet.
        <span className="font-semibold">
          {" "}
          They are largely composed of four tribes,
        </span>
      </h4>
      <div className="font-medium font-exo">
        {/* four tribes 이미지 */}
        <EachTribes />
      </div>
    </div>
  );
}

export default TribesExplain