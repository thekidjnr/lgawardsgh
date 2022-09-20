import React from 'react'
import {ImFacebook2, ImTwitter} from "react-icons/im"
import {AiOutlineInstagram, AiFillYoutube} from "react-icons/ai"
export const Footer = () => {
    return (
        <div className='bg-[#353535] pt-[84px] pb-[12px]'>
            <div className='flex justify-around' >
                <div className='w-[564px]'>
                    <h1 className='font-Poppins font-semibold text-[32px] leading-[48px] uppercase text-white ' >Subscribe to our newsletters for live updates</h1>
                    <p className='font-Poppins font-light text-[20px] leading-[30px] text-white ' >Provide your email address to receive our newsletter</p>
                </div>
                <div className='w-[440px]'>
                    <input type={"email"} className='w-full bg-[#7A7A7A] py-[17px] font-Open Sans font-semibold text-[26px] leading-[39px] rounded-[5px] text-white pl-[10px] required:border-red-500'  placeholder='Email'  />
                    <div className='mt-[53px] flex'>
                        <input type={"checkbox"} className="w-[32px] h-[32px]"/>
                        <p className='ml-[28px] text-white w-[480px]' >
                        By clicking subscribe, I agree to receive newsletters, marketing communications, updates, special offers (including partner offers), and other information from BET and the Paramount family of companies. 
                        </p>
                    </div>
                    <button className='w-full rounded-[3px] h-[66px] bg-white text-center py-[17px] mb-[183px] mt-[32px] text-[#818181] font-semibold text-[22px] leading-[33px] font-Poppins '>SUBSCRIBE</button>
                </div>
            </div>
            <div className='flex flex-col justify-center text-center'>
                <div className='flex justify-center'>
                    <ImFacebook2 color='#CBCBCB' className='w-[40px] h-[40px] cursor-pointer mr-[38px] ' />
                    <ImTwitter color='#CBCBCB' className='w-[40px] h-[40px] cursor-pointer  mr-[38px]  ' />
                    <AiOutlineInstagram color='#CBCBCB' className='w-[40px] h-[40px] cursor-pointer  mr-[38px]  ' />
                    <AiFillYoutube color='#CBCBCB' className='w-[40px] h-[40px] cursor-pointer ' />
                </div>
                <h1 className='mt-[21px] text-[#CBCBCB] font-Poppins font-semibold text-[20px] leading-[30px] ' >ALL RIGHTS RESERVED</h1>
                <h1 className='text-[#CBCBCB] font-Poppins font-semibold text-[20px] leading-[30px] ' > NATIONAL LOTTERY AUTHORITY, ACCRA-GHANA | 2022 </h1>
            </div>
        </div>
    )
}
