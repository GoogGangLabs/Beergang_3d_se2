import React from 'react'

type Props = {
  bg: string
}

const ColoredBar = (props: Props) => {
  return (
    <div
      className={`pad:mb-[clamp(20px,1.852vw,26px)] desktop:mb-[clamp(26px,1.354vw,100vw)] w-[clamp(50px,13.889vw,60px)] pad:w-[clamp(89px,8.241vw,130px)] desktop:w-[clamp(130px,6.771vw,100vw)] h-[2px] pad:h-[3px] desktop:h-[clamp(3px,,100vw)] skew-x-[-40deg] bg-gradient-to-r ${props.bg}`}
    ></div>
  );
}

export default ColoredBar