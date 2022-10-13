import React from "react";
import mission from "./assets/mission.png";
import value from "./assets/value.png";
import { BsArrowDown } from "react-icons/bs";

const AboutComponent = () => {
  return (
    <div className="-mt-[80px] lg:-mt-[92px]">
      <div className=" bg-aboutBg h-screen bg-cover pb-[35px] relative">
        <div className=" lg:pt-[260px] pt-[200px] flex flex-col items-center justify-center text-center">
          <h1 className="font-Nunito text-[100px] lg:text-[200px] font-black lg:leading-[250px] leading-[90px] text-white mb-12 lg:mb-0">
            about us
          </h1>
          <p className="  text-[#FFFFFF] font-light lg:text-[18px] text-[14px] lg:leading-[27px] m-auto w-10/12 lg:w-1/2 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie viverra nisl egestas viverra aliquet imperdiet arcu.
          </p>
          <BsArrowDown size={70} color="#fff" />
        </div>
      </div>
      <div className="font-Montserrat my-8">
        <h1 className=" text-primary font-medium text-center  text-3xl ">
          Lottery and Gaming Awards Ghana
        </h1>
        <p className="  font-light lg:text-[20px] text-[20px] lg:leading-[27px] m-auto w-10/12 lg:w-2/3 mt-6 text-center">
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
          molestie viverra nisl egestas viverra aliquet imperdiet arcu. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Magna molestie
          viverra nisl egestas viverra aliquet imperdiet arcu. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Magna molestie viverra nisl
          egestas viverra aliquet imperdiet arcu. "
        </p>
      </div>
      <div className="section font-Montserrat lg:flex gap-5 my-[140px] justify-around items-center">
        <div className="lg:w-1/2">
          <h1 className="text-primary font-bold text-[80px] leading-[75px]">
            our <br /> mission
          </h1>
          <p className="text-xl font-light mt-10  text-justify ">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie viverra nisl egestas viverra aliquet imperdiet arcu. Lorem
            <br />
            <br />
            ipsum dolor sit amet, consectetur adipiscing elit. Magna molestie
            viverra nisl egestas viverra aliquet imperdiet arcu. Lorem ipsum
            <br />
            <br />
            dolor sit amet, consectetur adipiscing elit. Magna molestie viverra
            nisl egestas viverra aliquet imperdiet arcu. "
          </p>
        </div>
        <img src={mission} alt="" className="lg:w-1/3 mt-8" />
      </div>
      <div className="section font-Montserrat flex gap-5 my-[140px] justify-around items-center flex-col-reverse lg:flex-row">
        <img src={value} alt="" className="lg:w-1/3 pt-8" />
        <div className="lg:w-1/2">
          <h1 className="text-primary font-bold text-[80px] leading-[75px]">
            core <br /> value
          </h1>
          <p className="text-xl font-light mt-10  text-justify">
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
            molestie viverra nisl egestas viverra aliquet imperdiet arcu. Lorem
            <br />
            <br />
            ipsum dolor sit amet, consectetur adipiscing elit. Magna molestie
            viverra nisl egestas viverra aliquet imperdiet arcu. Lorem ipsum
            <br />
            <br />
            dolor sit amet, consectetur adipiscing elit. Magna molestie viverra
            nisl egestas viverra aliquet imperdiet arcu. "
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
