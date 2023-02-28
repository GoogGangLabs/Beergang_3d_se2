import { useScrollText } from 'hooks';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { pageNumState } from 'store/atoms';

const ComingSoon = () => {
  const pageNum = useRecoilValue(pageNumState);
  const ref = useScrollText(
    29 / pageNum,
    0.4 / pageNum,
    31 / pageNum,
    0.4 / pageNum
  );
  return (
    <div ref={ref} className="absolute top-[43.438vh] pad:top-[42.839vh] desktop:top-[43.981vh] left-[12.778vw] pad:left-[23.611vw] desktop:left-[22.760vw] font-merchant">
      <h3 className="text-[clamp(26px,7.222vw,42px)] pad:text-[clamp(42px,3.889vw,62px)] desktop:text-[clamp(62px,3.229vw,100vw)] leading-[68%]">
        Many more
        <br />
        to come...
      </h3>
    </div>
  );
}

export default ComingSoon