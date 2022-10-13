import React from "react";

import { Footer } from "../../components/Home/Footer/Footer";
import LotterySlider from "../../components/Lottery/LotterySlider/LotterySlider";
import { LotteryTemplate } from "../../components/Lottery/LotteryTemplate";
import { Navbar } from "../../components/Navbar/Navbar";

export const Lottery = () => {
  return (
    <div className="bg-[#EFEFEF] h-100vh">
      <Navbar />
      <LotterySlider />
      <LotteryTemplate />
      <Footer />
    </div>
  );
};
