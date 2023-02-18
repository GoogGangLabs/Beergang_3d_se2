import React from "react";
import universe1 from "assets/png/universe-1.png";
import universe2 from "assets/png/universe-2.png";

const BeergangUniverse = () => {
  return (
    <>
      <div className="absolute top-[233.148vh] left-[9.167vw] pad:left-[12.222vw] desktop:left-[13.125vw]">
        <h3 className="pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[14px] text-[clamp(24px,6.667vw,40px)] pad:text-[clamp(40px,3.704vw,66px)] desktop:text-[66px]">
          BeerGang Universe
        </h3>
        <img
          className="w-[clamp(185px,51.389vw,398px)] pad:w-[clamp(398px,36.852vw,669px)] desktop:w-[669px] mt-[clamp(17px,4.722vw,22px)] pad:mt-[clamp(22px,2.037vw,41px)] desktop:mt-[41px]"
          src={universe1}
          alt=""
        />
        <h4 className="font-light font-bai-jamjuree pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[14px] w-[clamp(190px,52.778vw,382px)] pad:w-[clamp(382px,35.370vw,660px)] desktop:w-[660px] text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[18px] leading-[130%] pad:leading-[150%] desktop:leading-[125%] mt-[clamp(16px,4.444vw,25px)] pad:mt-[clamp(25px,2.315vw,42px)] desktop:mt-[42px]">
          Once upon a time, there was a time when a coin surged up in the air.
          It went so high to the point where it stayed closer to the sun for a
          few hundred years. Over time, it soaked up 10,000 kWh/m² worth of
          solar energy. The UV-powered coin floated around the universe until
          gravity dropped the coin into the river full of yeast on the empty
          planet. The moment the coin touched the river, it flicked and started
          to form carbon dioxide. As the coin brewed, the cell slowly replicated
          its DNA and divided into four daughter cells.
        </h4>
      </div>
      <div className="absolute top-[300.148vh] left-[9.167vw] pad:left-[12.222vw] desktop:left-[13.125vw]">
        <h4 className="font-light font-bai-jamjuree pad:ml-[clamp(8px,0.741vw,14px)] desktop:ml-[14px] w-[clamp(188px,52.222vw,382px)] pad:w-[clamp(382px,35.370vw,660px)] desktop:w-[660px] text-[clamp(10px,2.778vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[18px] leading-[130%] pad:leading-[150%] desktop:leading-[125%]">
          Alas, the four cells lost each other’s company when the river was
          divided into four different channels. Even though they each floated to
          a separate channel, they continued their cell division in grief. Each
          cell adapted to its new environment. What used to be a group of cells
          evolved into living beings and reproduced their offspring. As they
          evolved, they started developing a culture and started their
          livelihood near the river. The ancestors who started their journey
          named the place, “The Alcohol Planet.” They scattered all around the
          planet and started creating their own unique species.
        </h4>
        <img
          className="w-[clamp(185px,51.389vw,394.75px)] pad:w-[clamp(394.75px,36.551vw,669px)] desktop:w-[669px] mt-[18px] pad:mt-[clamp(17px,1.574vw,25px)] desktop:mt-[25px]"
          src={universe2}
          alt=""
        />
      </div>
    </>
  );
};

export default BeergangUniverse;
