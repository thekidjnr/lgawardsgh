import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const navigate = useNavigate();
  const lottery =()=>{
    navigate("/lottery");
  }
  const gaming =()=>{
    navigate("/gaming");
  }
  const home =()=>{
    navigate("/");
  }
  const contact =()=>{
    navigate("/contact");
  }
  return (
    <div className="flex  justify-between pt-[18px] ">
    <ul className=' ml-[35px] font-light text-[20px] leading-[27px]  flex justify-between text-[#FFFFFF] font-Open Sans  '>
        <li className=' cursor-pointer '  onClick={gaming}>GAMING</li>
        <li className=' cursor-pointer ml-[55px]' onClick={lottery}>LOTTERY</li>
        <li className=' ml-[55px] cursor-pointer '>HONOREES</li>
    </ul>
    <div className=' font-semibold text-[30px] leading-[45px] font-Open Sans text-[#FFFFFF] cursor-pointer ' onClick={home}>LOGO</div>
    <ul className=' font-Open Sans text-[#FFFFFF] mr-[35px] font-light text-[20px] leading-[27px]  flex justify-between'>
        <li className='cursor-pointer'>MEDIA</li>
        <li className=' ml-[55px] cursor-pointer '>ABOUT</li>
        <li className=' ml-[55px] cursor-pointer' onClick={contact}>CONTACT US</li>
    </ul>
</div>
  )
}
