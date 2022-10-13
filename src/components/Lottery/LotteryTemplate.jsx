import React from "react";
import { TitleData } from "./LotteryData";
export const LotteryTemplate = () => {
  return (
    <div className="section">
      <div className="">
        {TitleData.map((gaming) => {
          return (
            <div className="border-b-[2px] border-[#AE7404]/20">
              <h1 className="lg:text-4xl text-xl font-bold text-center uppercase text-[#AE7404] lg:w-1/2 mt-8 m-auto">
                {gaming.title}
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-2 place-items-center  gap-3 lg:gap-10 lg:mb-10 my-5 ">
                {gaming.nominees.map((nominee) => (
                  <div
                    key={nominee.id}
                    className="relative overflow-hidden shadow-lg"
                  >
                    <img
                      src={nominee.img}
                      className="w-full hover:scale-110 transition duration-300"
                      alt=""
                    />
                    <div className="absolute bottom-0 w-full lg:h-[100px] h-[30px] bg-black/75 text-white lg:px-14 lg:py-8 px-2 flex items-center">
                      <h1 className="lg:font-semibold lg:text-2xl lg:w-2/3 text-[10px] m-auto text-center">
                        {nominee.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
