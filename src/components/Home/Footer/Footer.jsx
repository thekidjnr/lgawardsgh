import React from "react";
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className="bg-[#353535] py-[60px]">
      <div className="section">
        <div className="flex flex-col lg:gap-10 lg:w-11/12 lg:m-auto lg:flex-row h-fit">
          <div className="text-center lg:text-left">
            <h1 className="font-Poppins font-semibold text-[20px] lg:text-[32px] lg:leading-[40px] uppercase text-white ">
              Subscribe to our newsletters for live updates
            </h1>
            <p className="font-Poppins font-light text-[12px] lg:text-[20px] lg:leading-[30px] text-white ">
              Provide your email address to receive our newsletter
            </p>
          </div>
          <div className="mt-5">
            <input
              type={"email"}
              className="w-full bg-[#595959] py-[14px] lg:py-[17px] font-Open Sans font-semibold text-[20px] lg:text-[26px] leading-[39px] rounded-[5px] text-white pl-[10px] required:border-red-500"
              placeholder="Email"
            />
            <div className="mt-[33px] flex gap-5 items-start">
              <input type="checkbox" className="mt-2 " />
              <p className=" text-white text-justify">
                By clicking subscribe, I agree to receive newsletters,
                marketing, updates, special offers (including partner offers),
                and other information from BET and the Paramount family of
                companies.
              </p>
            </div>
            <button className="w-full rounded-[3px] h-[66px] bg-white text-center py-[17px] mb-[183px] mt-[32px] text-[#818181] font-semibold text-[22px] leading-[33px] font-Poppins ">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <ImFacebook2
              color="#CBCBCB"
              className="w-[40px] h-[40px] cursor-pointer mr-[38px] "
            />
            <ImTwitter
              color="#CBCBCB"
              className="w-[40px] h-[40px] cursor-pointer  mr-[38px]  "
            />
            <AiOutlineInstagram
              color="#CBCBCB"
              className="w-[40px] h-[40px] cursor-pointer  mr-[38px]  "
            />
            <AiFillYoutube
              color="#CBCBCB"
              className="w-[40px] h-[40px] cursor-pointer "
            />
          </div>
          <h1 className="mt-[21px] text-[#CBCBCB] font-Poppins font-semibold text-[20px] leading-[30px] ">
            ALL RIGHTS RESERVED
          </h1>
          <h1 className="text-[#CBCBCB] font-Poppins font-semibold text-[20px] leading-[30px] ">
            NATIONAL LOTTERY AUTHORITY, ACCRA-GHANA | 2022
          </h1>
        </div>
      </div>
    </div>
  );
};
