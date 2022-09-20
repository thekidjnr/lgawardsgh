import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
export const LotteryCategory = () => {
    const navigate = useNavigate();
    const lottery =()=>{
      navigate("/lottery");
    }
    return (
        <div>
            <div className=' bg-[#353535] h-[159px] text-center pt-[46px]'>
                <h1 className=' font-semibold font-Open Sans text-[50px] leading-[68px] text-white '>TOP LOTTERY CATEGORIES</h1>
            </div>
            <div className=' bg-black h-100vh pt-[108px] pb-[94px]' >
                    <div className='flex justify-around ml-[77px] mr-[60px] ' >
                        <div className=' w-[560px] h-[423px] bg-cat_bg align-bottom ' >
                                <div className=' bg-item_bg h-[150px] mt-[280px] flex justify-center items-center '>
                                    <h1 className='w-[427px] text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] '  >Private Lottery operator of the Year</h1>
                                </div>
                        </div>
                        <div className=' w-[560px] h-[423px] bg-cat_bg align-bottom ' >
                                <div className=' bg-item_bg h-[150px] mt-[280px] flex justify-center items-center '>
                                    <h1 className='w-[427px] text-center text-white font-Open Sans font-bold text-[35px] leading-[38px] '  >Lotto Marketing Company of the Year</h1>
                                </div>
                        </div>
                    </div>
                    <div className='flex justify-around ml-[77px] mr-[60px] mt-[29px] ' >
                        <div className=' w-[364px] h-[306px] bg-small border-r-[1px] border-white align-bottom ' >
                                <div className=' bg-item_bg h-[91px] mt-[215px] flex justify-center items-center '>
                                    <h1 className='w-[267px] text-center text-white font-Open Sans font-bold text-[25px] leading-[34px] '  >Emerging Lottery Company of the year</h1>
                                </div>
                                
                        </div>
                        <div className=' w-[364px] h-[306px] bg-small border-r-[1px] border-white align-bottom ' >
                                <div className=' bg-item_bg h-[91px] mt-[215px] flex justify-center items-center '>
                                    <h1 className='w-[267px] text-center text-white font-Open Sans font-bold text-[25px] leading-[34px] '  >Corporate Brand of the Year</h1>
                                </div>
                                
                        </div>
                        <div className=' w-[364px] h-[306px] bg-small border-r-[1px] border-white align-bottom ' >
                                <div className=' bg-item_bg h-[91px] mt-[215px] flex justify-center items-center '>
                                    <h1 className='w-[267px] text-center text-white font-Open Sans font-bold text-[25px] leading-[34px] '  >Lottery Personality of the Year</h1>
                                </div>
                                
                        </div>
                    </div>

                    <div className=' cursor-pointer mt-[39px] justify-end flex mr-[80px] ' onClick={lottery} >
                            <h1 className='text-white mr-[25px] font-semibold font-Open Sans text-[22px] leading-[30px] '>Explore all</h1>
                            <BsArrowRight color='white'  style={{width:"28px", height:"38.88px"}} />
                    </div>
            </div>
        </div>
    )
}
