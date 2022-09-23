import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import bag from "./assets/bag.png";
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
export const ContactUs = () => {
  return (
    <div>
      <div className=" bg-black h-100vh bg-cover pb-[150px] ">
        <Navbar />
        <div className="flex justify-between">
          <div className="mt-[97px] ml-[35px] text-white w-[693px]">
            <h1 className="font-Open Sans font-semibold text-[50px] leading-[68px] ">
              Contact Us
            </h1>
            <p className="text-[#CBCBCB] font-light text-[24px] leading-[33px]">
              Kindly fill this form to reach out to us with your feedback and
              responses.
            </p>
            <div className="flex mt-[32px] justify-between">
              <div>
                <h1 className=" text-[28px] leading-[36px] text-white">
                  First Name
                </h1>
                <input
                  type="text"
                  className=" mt-[6px] border-white rounded-[6px] border text-[28px] leading-[36px] text-white bg-black w-[334px] h-[64px] pl-[5px]"
                />
              </div>
              <div>
                <h1 className=" text-[28px] leading-[36px] text-white">
                  Last Name
                </h1>
                <input
                  type="text"
                  className=" mt-[6px] border-white rounded-[6px] border text-[28px] leading-[36px] text-white bg-black w-[334px] h-[64px] pl-[5px]"
                />
              </div>
            </div>
            <div className=" mt-[24px] ">
              <h1 className=" text-[28px] leading-[36px] text-white">Email</h1>
              <input
                type="email"
                className=" mt-[6px] border-white rounded-[6px] border text-[28px] leading-[36px] text-white bg-black w-full h-[64px] pl-[5px]"
              />
            </div>
            <div className=" mt-[24px] ">
              <h1 className=" text-[28px] leading-[36px] text-white">
                Phone Number
              </h1>
              <input
                type="number"
                className=" mt-[6px] border-white rounded-[6px] border text-[28px] leading-[36px] text-white bg-black w-full h-[64px] pl-[5px]"
              />
            </div>
            <div className=" mt-[42px] ">
              <h1 className=" text-[28px] leading-[36px] text-white">
                Message
              </h1>
              <textarea
                name="message"
                id="message"
                className=" mt-[6px] border-white rounded-[6px] border   w-full h-[180px] text-white bg-black  pl-[5px] "
              />
            </div>
            <button className=" mt-[41px] rounded-[6px] w-full h-[72px] bg-white text-center text-[24px] font-semibold  leading-[36px] py-[18px] text-black ">
              Send Message
            </button>
          </div>
          <div className=" bg-left w-[552px] mt-[90px] "></div>
        </div>
        <div className=" justify-center text-center text-white mt-[138px] ">
          <h1 className=" font-Open Sans font-semibold text-[24px] leading-[33px] ">
            Contact Us Directly
          </h1>
          <h1 className=" font-Open Sans font-semibold text-[50px] leading-[68px] ">
            We’d love to hear from you
          </h1>
          <h1 className=" font-Open Sans font-semibold text-[24px] leading-[33px] ">
            Chat with our friendly team directly
          </h1>
        </div>
        <div className="flex justify-evenly mt-[59px]">
          <div className="text-white text-center justify-center items-center flex flex-col ">
            <div className=" w-[46px] bg-white text-center rounded-[9px] justify-center py-[6px] px-[6px]">
              <MdOutlineEmail
                color="black"
                className=" w-[36.67px] h-[29.33px] "
              />
            </div>
            <h1 className="font-Open Sans font-semibold text-[24px] leading-[33px]">
              Email Us
            </h1>
            <h1 className="font-Open San text-[18px] leading-[25px]">
              Reach out to us via email:
            </h1>
            <h1 className="font-Open Sans font-semibold text-[16px] leading-[22px]">
              lgawardsgh@gmail.com
            </h1>
          </div>
          <div className="text-white text-center justify-center items-center flex flex-col ">
            <div className=" w-[46px] bg-white text-center rounded-[9px] justify-center py-[6px] px-[6px]">
              <img
                src={bag}
                alt=""
                color="black"
                className=" w-[36.67px] h-[29.33px] "
              />
            </div>
            <h1 className="font-Open Sans font-semibold text-[24px] leading-[33px]">
              Visit Us
            </h1>
            <h1 className="font-Open San text-[18px] leading-[25px]">
              Visit our office HQ:
            </h1>
            <h1 className="font-Open Sans font-semibold text-[16px] leading-[22px]">
              National Lottery HQ, Accra
            </h1>
          </div>
          <div className="text-white text-center justify-center items-center flex flex-col ">
            <div className=" w-[46px] bg-white text-center rounded-[9px] justify-center py-[6px] px-[6px]">
              <FiPhoneCall
                color="black"
                className=" w-[36.67px] h-[29.33px] "
              />
            </div>
            <h1 className="font-Open Sans font-semibold text-[24px] leading-[33px]">
              Call Us
            </h1>
            <h1 className="font-Open San text-[18px] leading-[25px]">
              Mon-Fri from 8am to 5pm
            </h1>
            <h1 className="font-Open Sans font-semibold text-[16px] leading-[22px]">
              +233 18 000 0000
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#353535] h-[223px] pt-[63px] ">
        <div className="flex flex-col justify-center text-center">
          <div className="flex justify-center">
            <ImFacebook2
              color="#CBCBCB"
              className="w-[30px] h-[30px] cursor-pointer mr-[38px] "
            />
            <ImTwitter
              color="#CBCBCB"
              className="w-[30px] h-[30px] cursor-pointer  mr-[38px]  "
            />
            <AiOutlineInstagram
              color="#CBCBCB"
              className="w-[30px] h-[30px] cursor-pointer  mr-[38px]  "
            />
            <AiFillYoutube
              color="#CBCBCB"
              className="w-[30px] h-[30px] cursor-pointer "
            />
          </div>
          <h1 className="mt-[21px] text-[#CBCBCB]  font-semibold text-[18px] leading-[30px] ">
            ALL RIGHTS RESERVED
          </h1>
          <h1 className="text-[#CBCBCB]  font-semibold text-[18px] leading-[30px] ">
            {" "}
            NATIONAL LOTTERY AUTHORITY, ACCRA-GHANA | 2022
          </h1>
        </div>
      </div>
    </div>
  );
};
