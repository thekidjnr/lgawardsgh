import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TitleData } from "../../Gaming/GamingData";
export const GamingCategory = () => {
  return (
    <div className="bg-black lg:pb-[64px]">
      <div className=" bg-[#353535] lg:py-[40px] text-center">
        <h1 className=" font-semibold font-Open Sans lg:text-[50px] text-[20px] leading-[68px] text-white ">
          TOP GAMING CATEGORY
        </h1>
      </div>
      <div className="section py-[40px] ">
        <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:mb-10 mb-5 ">
          {TitleData.filter((title) => title.id <= 4).map((lotto) => {
            return (
              <div className="border-[0.5px]  overflow-hidden relative">
                <img
                  src={lotto.img}
                  className="w-full hover:scale-110 transition duration-300"
                  alt=""
                />
                <div className="absolute bottom-0 w-full lg:h-[100px] h-[50px] bg-black/75 text-white lg:px-14 lg:py-8 px-2 flex items-center">
                  <h1 className="font-semibold lg:text-2xl lg:w-2/3 text-[10px] m-auto text-center">
                    {lotto.title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          to="/gaming"
          className=" cursor-pointer mt-[39px] justify-end flex items-center gap-2 "
        >
          <h1 className="text-white font-medium lg:font-semibold font-Open Sans lg:text-[22px]">
            Explore all
          </h1>
          <BsArrowRight
            color="white"
            style={{ width: "28px", height: "38.88px" }}
          />
        </Link>
      </div>
    </div>
  );
};
