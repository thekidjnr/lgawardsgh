import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TitleData } from "../../Lottery/LotteryData";

export const LotteryCategory = () => {
  const navigate = useNavigate();
  const lottery = () => {
    navigate("/lottery");
  };
  return (
    <div>
      <div className=" bg-[#353535] lg:py-[40px] text-center ">
        <h1 className=" font-semibold font-Open Sans lg:text-[50px] text-[20px] leading-[68px] text-white ">
          TOP LOTTERY CATEGORIES
        </h1>
      </div>
      <div className=" bg-black h-100vh py-[40px]">
        <div className="section">
          <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:mb-10 mb-5 ">
            {TitleData.filter((title) => title.id <= 2).map((lotto) => {
              return (
                <div className="border-[0.5px]  overflow-hidden relative">
                  <img
                    src={lotto.img}
                    className="w-full hover:scale-110 transition duration-300"
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full bg-black/75 text-white lg:px-14 lg:py-8 py-2 px-2">
                    <h1 className="font-semibold lg:text-3xl lg:w-2/3 text-[10px] m-auto text-center">
                      {lotto.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 ">
            {TitleData.filter((title) => 3 <= title.id).map((lotto) => {
              return (
                <div className="border-[0.5px] overflow-hidden relative">
                  <img
                    src={lotto.img}
                    alt=""
                    className="w-full hover:scale-110 transition duration-300"
                  />
                  <div className="absolute bottom-0 w-full lg:h-[100px] h-[50px] bg-black/75 text-white lg:px-14 lg:py-8 px-2 flex items-center">
                    <h1 className="font-semibold lg:text-3xl lg:w-2/3 text-[10px] m-auto text-center">
                      {lotto.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className=" cursor-pointer mt-[39px] justify-end flex items-center gap-2 "
            onClick={lottery}
          >
            <h1 className="text-white font-medium lg:font-semibold font-Open Sans lg:text-[22px]">
              Explore all
            </h1>
            <BsArrowRight
              color="white"
              style={{ width: "28px", height: "38.88px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
