import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import arrow from "./assets/arrow.png";
const LotterySlider = () => {
  return (
    <div className=" bg-game_bg h-screen bg-cover">
      <div className=" bg-bgColor h-screen bg-cover pb-[35px] ">
        <Navbar />
        <div className=" mb-[42px] mt-[200px] text-center items-center justify-center flex flex-col ">
          <h1 className=" text-lg font-Rossans text-[80px] leading-[81px] text-[#FFFFFF]  ">
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#faeac9]">
              LIST OF NOMINEES FOR THE <br />
              LOTTERY CATEGORY
            </span>
          </h1>
          <p className="  text-[#FFFFFF] mt-[12px] font-light text-[20px] leading-[27px] ">
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
