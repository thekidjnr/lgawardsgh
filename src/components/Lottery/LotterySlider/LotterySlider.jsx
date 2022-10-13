import React from "react";
import arrow from "./assets/arrow.png";
const LotterySlider = () => {
  return (
    <div className="bg-game_bg h-screen bg-cover -mt-[80px] lg:-mt-[92px]">
      <div className=" bg-black/75 h-screen bg-cover pb-[35px] ">
        <div className="mb-[42px] pt-[160px] lg:pt-[290px] section text-center items-center justify-center flex flex-col ">
          <h1 className=" text-6xl font-Rossans lg:text-[80px]  font-normal lg:leading-[81px] text-[#FFFFFF]  ">
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#faeac9]">
              LIST OF NOMINEES FOR THE <br />
              LOTTERY CATEGORY
            </span>
          </h1>
          <p className="  text-[#FFFFFF] mt-[12px]  font-light text-[12px] lg:text-[18px] lg:w-1/2 lg:leading-[27px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie <br />
            viverra nisl egestas viverra aliquet imperdiet arcu.
          </p>
          <img src={arrow} alt="" className="mt-[100px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LotterySlider;
