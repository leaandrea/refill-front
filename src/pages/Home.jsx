import React from "react";
import NavMain from "../components/NavMain";
import AboutSection from ".././components/AboutSection";
import HomeMap from "../components/HomeMap";
import ProSection from "../components/ProSection";
import Footer from "../components/Footer";

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
