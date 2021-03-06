import React, { useState, useEffect } from "react";
import NavMain from "../components/NavMain";
import AboutSection from "../components/AboutSection";
import TextsSection from "../components/TextsSection";
import HomeMap from "../components/HomeMap";
import ProSection from "../components/ProSection";
import Footer from "../components/Footer";
import GeoLoc from "../components/GeoLoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

const Home = props => {
  const [geoState, setGeoState] = useState(false);
  const [logoState, SetLogoNav] = useState(true);

  // const changeGeoState = () => {

  //   console.log(geoState)
  //   setGeoState(true)
  // }

  useEffect(() => {
    // console.log(props, "hellooooo")
    // // Update the document title using the browser API
    // SetLogoNav(false)
    if (props.history.location.pathname === "/home") {
      SetLogoNav(true);
    }
  }, []); // eslint-disable-line

  const handleGeo = () => {
    // console.log("click");
    setGeoState(true);
    // console.log(geoState);
  };

  return (
    <>
      {/* <hr className="top-home-line" /> */}

      <NavMain
        history={props.history}
        logoState={logoState}
        display={"absolute"}
        color={"#FEFFFF"}
        paddingTop={"1.7rem"}
      />
      <AboutSection />

      <TextsSection />
      {/* <section className="home-map-section"> */}

      <div className="home-map-section-wrapper-flex">
        <div className="home-map-container">
          <HomeMap />
        </div>

        <div className="txt-container-flex-column">
          {/* <div className="pick-container"> */}

          <h2 className="choose">
            <div className="icon-cont">
              <FontAwesomeIcon
                icon="mouse-pointer"
                className="icon-mouse-pointer "
              />
            </div>
            Pick an arrondissement <br /> on the map
          </h2>

          <h2 className="choose">
            <button className="geoloc-btn" onClick={handleGeo}>
              <div className="icon-cont">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="icon-dot-circle"
                />
              </div>
            </button>
            Click here to <br /> get your location.
          </h2>
          {geoState ? <GeoLoc /> : null}
        </div>
      </div>

      {/* </div> */}
      {/* </section> */}

      {/* <hr className="top-home-line" /> */}
      <ProSection />
      {/* <hr className="top-home-line" /> */}
      <Footer />
    </>
  );
};

export default Home;
