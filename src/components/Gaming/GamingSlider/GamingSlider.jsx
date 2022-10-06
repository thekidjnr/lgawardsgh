import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import arrow from "./assets/arrow.png";
const GamingSlider = () => {
  return (
    <div className=" bg-game_bg h-100vh bg-cover -mt-[80px] lg:-mt-[92px]">
      <div className=" bg-bgColor h-100vh bg-cover pb-[35px] ">
        <div className=" mb-[42px] pt-[260px] section text-center items-center justify-center flex flex-col ">
          <h1 className=" text-4xl font-Rossans lg:text-[80px] lg:w-10/12 font-normal lg:leading-[81px] text-[#FFFFFF]  ">
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#faeac9]">
              LIST OF NOMINEES FOR THE GAMING CATEGORY
            </span>
          </h1>
          <p className="  text-[#FFFFFF] mt-[12px]  font-light text-[14px] lg:text-[18px] lg:w-1/2 lg:leading-[27px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie viverra nisl egestas viverra aliquet imperdiet arcu.
          </p>
          <img src={arrow} alt="" className="mt-[85px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default GamingSlider;
