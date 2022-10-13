import React from "react";
import icon from "./assets/icon.png";

const HomeSlider = () => {
  return (
    <div className=" bg-bg h-100vh bg-cover -mt-[80px] lg:-mt-[92px]">
      <div className=" bg-bgColor h-full bg-cover pb-[35px] relative">
        <div className=" lg:pt-[260px] pt-[200px] text-center items-center justify-center ">
          <div className=" text-lg font-Rossans lg:leading-[81px] leading-[35px] text-white">
            <h1 className=" lg:text-[60px] text-[25px] ">THIS IS</h1>
            <h1 className="lg:text-[60px] text-[25px] ">
              THE &nbsp;
              <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#FFFFFF]">
                FIRST EDITION
              </span>
              <span>&nbsp; OF THE</span>
            </h1>
            <h1 className="lg:text-[60px] text-[25px]  ">
              ANNUAL LOTTERY AND GAMING AWARDS
            </h1>
          </div>
          <p className="  text-[#FFFFFF] mt-[28px] font-light lg:text-[18px] text-[14px] lg:leading-[27px] m-auto w-10/12 lg:w-1/2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie viverra nisl egestas viverra aliquet imperdiet arcu.
          </p>
        </div>
        <div className=" w-full flex items-center justify-center justify-items-center">
          <button className="flex mt-[36px] items-center  border p-4 rounded-[30px] mb-[100px]">
            <img src={icon} className="1/6" alt="" />
            <span className=" ml-[15px]  lg:text-[22px] leading-[30px] text-transparent  bg-clip-text bg-gradient-to-r from-[#F9C662] to-[#FFFFFF]">
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
