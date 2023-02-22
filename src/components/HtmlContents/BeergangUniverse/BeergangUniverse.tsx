import React, { useEffect, useState } from "react";
import universe1 from "assets/png/universe-1.png";
import universe2 from "assets/png/universe-2.png";
import toggleOpen from "assets/svg/toggle-open.svg";
import { useResize } from "hooks";

const BeergangUniverse = () => {
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const { width, height } = useResize();

  const toggleOneHandler = () => {
    setToggle1((prev) => !prev);
  };
  const toggleTwoHandler = () => {
    setToggle2((prev) => !prev);
  };

  useEffect(() => {
    if (width >= 1080) {
      setToggle1(true);
      setToggle2(true);
    } else {
      setToggle1(false);
      setToggle2(false);
    }
  }, [width]);

  return (
    <>
      <div className="absolute top-[313.148vh] left-[6.111vw] pad:left-[12.222vw] desktop:left-[13.125vw]">
        <h3 className="ml-[clamp()] pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[clamp(14px,0.729vw,100vw)] text-[clamp(24px,6.667vw,38px)] pad:text-[clamp(38px,3.519vw,62px)] desktop:text-[clamp(62px,3.229vw,100vw)] leading-[68%] font-merchant">
          BEERGANG UNIVERSE
        </h3>
        <img
          className="hidden pad:block w-[clamp(185px,51.389vw,398px)] pad:w-[clamp(398px,36.852vw,669px)] desktop:w-[clamp(669px,34.844vw,100vw)] mt-[clamp(17px,4.722vw,22px)] pad:mt-[clamp(22px,2.037vw,41px)] desktop:mt-[clamp(41px,2.135vw,100vw)]"
          src={universe1}
          alt=""
        />
        <h4 className="font-light font-bai-jamjuree pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[clamp(14px,0.729vw,100vw)] w-[clamp(190px,52.778vw,382px)] pad:w-[clamp(382px,35.370vw,660px)] desktop:w-[clamp(660px,34.375vw,100vw)] text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] leading-[130%] pad:leading-[150%] desktop:leading-[125%] mt-[clamp(16px,4.444vw,25px)] pad:mt-[clamp(25px,2.315vw,42px)] desktop:mt-[clamp(42px,2.188vw,100vw)]">
          Once upon a time, there was a time when a coin surged up in the air.
          It went so high to the point where it stayed closer to the sun for a
          few hundred years. Over time, it soaked up 10,000 kWh/m² worth of
          solar energy.
          {/* view more */}
          <div
            onClick={toggleOneHandler}
            className="flex pad:hidden items-center mt-[clamp(5px,1.389vw,22px)]"
          >
            <h3 className="font-bai-jamjuree font-semibold text-[#FF5C00] text-[clamp(9px,2.5vw,13.5px)]">
              View more
            </h3>
            <img
              className="ml-[clamp(4.5px,1.25vw,6.75px)] w-[clamp(9px,2.5vw,13.5px)] mt-[clamp(2px,0.556vw,3.5px)] transition duration-[400ms]"
              src={toggleOpen}
              alt="토글"
              style={{
                transform: toggle1 ? "rotateX(180deg)" : "rotateX(0deg)",
              }}
            />
          </div>
          {toggle1 ? (
            <>
              <img
                className="pad:hidden w-[clamp(185px,51.389vw,398px)] mt-[clamp(5px,1.389vw,22px)]"
                src={universe1}
                alt=""
              />
              <div className="pad:inline mt-[clamp(5px,1.389vw,22px)] pad:mt-0">
                {" "}
                The UV-powered coin floated around the universe until gravity
                dropped the coin into the river full of yeast on the empty
                planet. The moment the coin touched the river, it flicked and
                started to form carbon dioxide. As the coin brewed, the cell
                slowly replicated its DNA and divided into four daughter cells.
              </div>
            </>
          ) : null}
        </h4>
      </div>
      <div className="absolute top-[420.148vh] left-[6.111vw] pad:left-[12.222vw] desktop:left-[13.125vw]">
        <h4 className="font-light font-bai-jamjuree ml-[clamp(3px,0.833vw,8px)] pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[clamp(14px,0.729vw,100vw)] w-[clamp(188px,52.222vw,382px)] pad:w-[clamp(382px,35.370vw,660px)] desktop:w-[clamp(660px,34.375vw,100vw)] text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,100vw)] leading-[130%] pad:leading-[150%] desktop:leading-[125%]">
          Alas, the four cells lost each other’s company when the river was
          divided into four different channels. Even though they each floated to
          a separate channel, they continued their cell division in grief. Each
          cell adapted to its new environment.
          {/* view more */}
          <div
            onClick={toggleTwoHandler}
            className="flex pad:hidden items-center mt-[clamp(5px,1.389vw,22px)]"
          >
            <h3 className="font-bai-jamjuree font-semibold text-[#FF5C00] text-[clamp(9px,2.5vw,13.5px)]">
              View more
            </h3>
            <img
              className="ml-[clamp(4.5px,1.25vw,6.75px)] w-[clamp(9px,2.5vw,13.5px)] mt-[clamp(2px,0.556vw,3.5px)] transition duration-[400ms]"
              src={toggleOpen}
              alt="토글"
              style={{
                transform: toggle2 ? "rotateX(180deg)" : "rotateX(0deg)",
              }}
            />
          </div>
          {toggle2 ? (
            <div className="pad:inline mt-[clamp(5px,1.389vw,22px)] pad:mt-0">
              {" "}
              What used to be a group of cells evolved into living beings and
              reproduced their offspring. As they evolved, they started
              developing a culture and started their livelihood near the river.
              The ancestors who started their journey named the place, “The
              Alcohol Planet.” They scattered all around the planet and started
              creating their own unique species.
            </div>
          ) : null}
        </h4>
        {toggle2 ? (
          <img
            className="w-[clamp(185px,51.389vw,394.75px)] pad:w-[clamp(394.75px,36.551vw,669px)] desktop:w-[clamp(669px,34.844vw,100vw)] mt-[18px] pad:mt-[clamp(17px,1.574vw,25px)] desktop:mt-[clamp(25px,1.302vw,100vw)]"
            src={universe2}
            alt=""
          />
        ) : null}
      </div>
    </>
  );
};

export default BeergangUniverse;
