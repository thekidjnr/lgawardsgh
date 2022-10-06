import React from "react";
import { Awards } from "../../components/Gaming/Awards/Awards";
import GamingSlider from "../../components/Gaming/GamingSlider/GamingSlider";
import { Footer } from "../../components/Home/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Gaming = () => {
  return (
    <div className="bg-[#EFEFEF] h-100vh">
      <Navbar />
      <GamingSlider />
      <Awards />
      <Footer />
    </div>
  );
};
