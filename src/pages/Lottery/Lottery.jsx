import React from 'react'
import { Awards } from '../../components/Lottery/Awards/Awards'
import LotterySlider from '../../components/Lottery/LotterySlider/LotterySlider'

export const Lottery = () => {
  return (
    <div className='bg-[#EFEFEF] h-100vh'>
      <LotterySlider/>
      <Awards/>
    </div>
  )
}
