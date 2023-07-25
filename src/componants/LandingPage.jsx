import React from "react";
import HomeNav from "./home/HomeNav";
import FirstBody from "./home/FirstBody";
import SecondBody from "./home/SecondBody";
import ThrdBody from "./home/ThrdBody";
import ForthBody from "./home/ForthBody";
import FifthBody from "./home/FifthBody";
import Footer from "./home/Footer";

const LandingPage = () => {
  return (
    <div>
      <FirstBody />
       <SecondBody />
      <ThrdBody />
      <ForthBody />
      <FifthBody />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
