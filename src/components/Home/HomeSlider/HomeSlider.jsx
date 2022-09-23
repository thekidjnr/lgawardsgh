import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import icon from "./assets/icon.png";

const HomeSlider = () => {
  return (
    <div className=" bg-bg h-100vh bg-cover">
      <div className=" bg-bgColor h-100vh bg-cover pb-[35px] relative">
        <Navbar />
        <div className=" mt-[160px] text-center items-center justify-center ">
          <h1 className=" text-lg font-Rossans text-[60px] font-normal leading-[81px] text-[#FFFFFF]  ">
            THIS IS
          </h1>
          <h1 className=" text-lg font-Rossans text-[60px] font-normal leading-[81px] text-[#FFFFFF]  ">
            THE &nbsp;
            <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#FFFFFF]">
              FIRST EDITION
            </span>
            <span>&nbsp; OF THE</span>
          </h1>
          <h1 className=" text-lg font-Rossans text-[60px] font-normal leading-[81px] text-[#FFFFFF]  ">
            ANNUAL LOTTERY AND GAMING AWARDS
          </h1>
          <p className="  text-[#FFFFFF] mt-[28px] font-light text-[18px] leading-[27px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            <br />
            molestie viverra nisl egestas viverra aliquet imperdiet arcu.
          </p>
        </div>
        <div className=" w-full text-[-webkit-center] flex items-center justify-center justify-items-center">
          <button className="flex mt-[36px] items-center  border p-4 rounded-[30px] mb-[100px]">
            <img src={icon} alt="" />
            <span className=" ml-[15px]  text-[22px] font-normal font-Open Sans leading-[30px] text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#FFFFFF]">
              Play Video
            </span>
          </button>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className=" rounded-[100%] w-3 h-3 bg-white "></button>
          <button className=" rounded-[100%] w-3 h-3 bg-[#747474] ml-[7px] "></button>
          <button className=" rounded-[100%] w-3 h-3 bg-[#747474] ml-[7px] "></button>
          <button className=" rounded-[100%] w-3 h-3 bg-[#747474] ml-[7px] "></button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
