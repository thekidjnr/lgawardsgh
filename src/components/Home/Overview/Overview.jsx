import React from "react";
import Sammi from "./assets/Sammi.png";
export const Overview = () => {
  return (
    <div className=" bg-[#1E1E1E] ">
      <div className="section lg:flex h-fit pb-[67px] justify-around ">
        <div className=" text-white lg:mt-[85px] lg:w-[605px] ">
          <h1 className="font-Open Sans font-bold lg:text-[60px] text-[30px] text-center leading-[82px] ">
            GENERAL OVERVIEW
          </h1>
          <p className=" lg:mt-[14px]  lg:text-[22px] lg:font-medium font-light text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            commodo orci lectus elementum platea malesuada aliquet eu. Lectus id
            arcu, libero, ipsum neque laoreet egestas. Ultrices phasellus nisl
            ut aliquam volutpat erat tempor habitasse. Egestas sit consectetur
            \ullamcorper tellus, quis facilisis facilisis. Donec consequat, est,
            neque, sapien orci curabitur elementum. Amet risus hac eget egestas
            integer semper lacus, risus. Tellus nec mattis pellentesque euismod
            ipsum aliquam.
          </p>

          <p className="  mt-[20px] lg:text-[20px] text-end leading-[30px] font-light italic ">
            - DIRECTOR GENERAL, SAMMY AWUKU
          </p>
        </div>
        <div className="  mt-[100px] flex ">
          <img src={Sammi} className=" w-full z-0 " alt="" />
          <div className="-ml-[381px] -mt-[30px] outline outline-white w-[350px] lg:w-[405px] lg:h-[400px] "></div>
        </div>
      </div>
    </div>
  );
};
