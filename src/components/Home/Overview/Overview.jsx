import React from 'react'
import Sammi from "./assets/Sammi.png"
export const Overview = () => {
    return (
        <div className='flex h-fit bg-[#1E1E1E] pb-[67px] justify-around '>
            <div className=' text-white mt-[85px] w-[605px] '>
                <h1 className='font-Open Sans font-bold text-[60px] leading-[82px] ' >GENERAL OVERVIEW </h1>
                <p className=' mt-[14px] font-Poppins text-[22px] font-light text-justify leading-[33px] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis commodo orci lectus
                    elementum platea malesuada aliquet eu. Lectus id arcu, libero, ipsum neque laoreet egestas.
                    Ultrices phasellus nisl ut aliquam volutpat erat tempor habitasse. Egestas sit consectetur
                    \ullamcorper tellus, quis facilisis facilisis. Donec consequat, est, neque, sapien orci curabitur elementum.
                    Amet risus hac eget egestas integer semper lacus, risus. Tellus nec mattis pellentesque euismod ipsum aliquam.
                </p>

                <p className='  mt-[58px] text-[20px] text-end leading-[30px] font-Poppins font-light italic '>- DIRECTOR GENERAL, SAMMY AWUKU </p>
            </div>
            <div className='  mt-[100px] flex '>
                <img src={Sammi} className=" w-[405px] h-[425px] z-0 " alt="" />
                <div className='-ml-[381px] -mt-[34px] outline outline-white  w-[405px] h-[425px] ' ></div>
            </div>
        </div>
    )
}
