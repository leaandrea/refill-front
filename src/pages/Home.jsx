import React from "react";
import NavMain from "../Components/NavMain";
import AboutSection from "../Components/AboutSection";
import HomeMap from "../Components/HomeMap";
import ProSection from "../Components/ProSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <hr className="top-home-line" />
      <NavMain />
      <hr className="top-home-line" />
      <AboutSection />
      <hr className="top-home-line" />
      <HomeMap />
      <hr className="top-home-line" />
      <ProSection />
      <hr className="top-home-line" />
      <Footer />
    </>
  );
};

export default Home;
