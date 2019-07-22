import React from "react";
import NavMain from "../components/NavMain";
import AboutSection from "../components/AboutSection";
import HomeMap from "../components/HomeMap";
import ProSection from "../components/ProSection";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  let geolocBtn = "Get my location";
  return (
    <>
      <hr className="top-home-line" />
      <NavMain />
      {/* <hr className="top-home-line" /> */}
      <AboutSection />
      {/* <hr className="top-home-thin-line" /> */}

      <section className="home-map-section">
        <div className="home-map-section-wrapper-flex">
          <div className="home-map-container">
            <HomeMap />
          </div>
          <div className="txt-container-flex-column">
            <div className="choose-container">
              <h2 className="choose">
                <div className="icon-cont">
                  <FontAwesomeIcon
                    icon="mouse-pointer"
                    className="icon-mouse-pointer"
                  />
                </div>
                Pick an arrondissement on the map
              </h2>
            </div>

            <div className="btn-geoloc-container">
              <Btn className="geoloc-btn">
                <div className="icon-cont">
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="icon-dot-circle"
                  />
                </div>
                {geolocBtn}
              </Btn>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="top-home-line" /> */}
      <ProSection />
      {/* <hr className="top-home-line" /> */}
      <Footer />
    </>
  );
};

export default Home;
