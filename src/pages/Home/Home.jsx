import React from "react";
import { LotteryCategory } from "../../components/Home/LotteryCategory/LotteryCategory";
import HomeSlider from "../../components/Home/HomeSlider/HomeSlider";
import { Overview } from "../../components/Home/Overview/Overview";
import { GamingCategory } from "../../components/Home/GamingCategory/GamingCategory";
import { Footer } from "../../components/Home/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <Overview />
      <LotteryCategory />
      <GamingCategory />
      <Footer />
    </>
  );
};

export default Home;
