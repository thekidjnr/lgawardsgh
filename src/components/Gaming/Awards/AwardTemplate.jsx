import React from 'react'

export const AwardTemplate = ({ tittle }) => {
    return (
        <div className='text-center pb-[73px] '>
            <h1 className='font-Poppins font-bold text-[#AE7404] text-[40px] leading-[60px] mb-[38px] '>{tittle} <br />OF THE YEAR</h1>
            <div className='flex justify-center'>
                <div className='w-[370.77px] shadow-xl mr-[20px]'>
                    <div className='bg-award h-[390px] w-[370.77px] '>
                    </div>
                    <h1 className='w-full bg-white h-[60px] text-center py-[6px] text-black text-[30px] font-bold leading-[45px] -mt-[60px]'>BETWAY GHANA</h1>
                </div>
                <div className='w-[370.77px] shadow-xl mr-[20px]'>
                    <div className='bg-award h-[390px] w-[370.77px] '>
                    </div>
                    <h1 className='w-full bg-white h-[60px] text-center py-[6px] text-black text-[30px] font-bold leading-[45px] -mt-[60px]'>BETWAY GHANA</h1>
                </div>
                <div className='w-[370.77px] shadow-xl'>
                    <div className='bg-award h-[390px] w-[370.77px] '>
                    </div>
                    <h1 className='w-full bg-white h-[60px] text-center py-[6px] text-black text-[30px] font-bold leading-[45px] -mt-[60px]'>BETWAY GHANA</h1>
                </div>
            </div>
            <div className='mt-[100px] mx-[5%] border border-[#747474] border-solid bg-[#747474]'></div>
        </div>
    )
}
