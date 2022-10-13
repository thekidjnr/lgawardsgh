import React from "react";
import GamingSlider from "../../components/Gaming/GamingSlider/GamingSlider";
import { GamingTemplate } from "../../components/Gaming/GamingTemplate";
import { Footer } from "../../components/Home/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Gaming = () => {
  return (
    <div className="bg-[#EFEFEF] h-100vh">
      <Navbar />
      <GamingSlider />
      <GamingTemplate />
      <Footer />
    </div>
  );
};
