import React from "react";
import NavMain from "../components/NavMain";
import AboutSection from "../components/AboutSection";
import HomeMap from "../components/HomeMap";
import ProSection from "../components/ProSection";
import Footer from "../components/Footer";
import Btn from "../components/Btn";

const Home = () => {
  let geolocBtn = "Get my Location";
  return (
    <>
      <hr className="top-home-line" />
      <NavMain />
      <hr className="top-home-line" />
      <AboutSection />
      <hr className="top-home-line" />
      <div className="home-map-container">
        <HomeMap />
      </div>
      <div className="btn-geoloc-container">
        <Btn>{geolocBtn}</Btn>
      </div>
      <hr className="top-home-line" />
      <ProSection />
      <hr className="top-home-line" />
      <Footer />
    </>
  );
};

export default Home;