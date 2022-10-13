import React from "react";
import AboutComponent from "../../components/About/AboutComponent";
import { Footer } from "../../components/Home/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutComponent />
      <Footer />
    </>
  );
};

export default About;
