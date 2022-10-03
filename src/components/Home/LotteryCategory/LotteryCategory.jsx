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
      <div className=" bg-[#353535] h-[159px] text-center pt-[46px]">
        <h1 className=" font-semibold font-Open Sans text-[50px] leading-[68px] text-white ">
          TOP LOTTERY CATEGORIES
        </h1>
      </div>
      <div className=" bg-black h-100vh pt-[108px] pb-[94px]">
        <div className="section">
          <div className="grid grid-cols-2 gap-10 mb-10 ">
            {TitleData.filter((title) => title.id <= 2).map((lotto) => {
              return (
                <div className="border-[0.5px]  overflow-hidden relative">
                  <img
                    src={lotto.img}
                    className="w-full hover:scale-110 transition duration-300"
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full bg-black/75 text-white px-14 py-8">
                    <h1 className="font-semibold text-3xl w-2/3 m-auto text-center">
                      {lotto.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {TitleData.filter((title) => 3 <= title.id).map((lotto) => {
              return (
                <div className="border-[0.5px] overflow-hidden relative">
                  <img
                    src={lotto.img}
                    alt=""
                    className="w-full hover:scale-110 transition duration-300"
                  />
                  <div className="absolute bottom-0 w-full h-[100px] bg-black/75 text-white px-10 flex items-center">
                    <h1 className="font-semibold text-2xl m-auto text-center">
                      {lotto.title}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className=" cursor-pointer mt-[39px] justify-end flex mr-[80px] "
            onClick={lottery}
          >
            <h1 className="text-white mr-[25px] font-semibold font-Open Sans text-[22px] leading-[30px] ">
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
