import React, { useState } from "react";
import NavMain from "../components/NavMain";
import AboutSection from "../components/AboutSection";
import HomeMap from "../components/HomeMap";
import ProSection from "../components/ProSection";
import Footer from "../components/Footer";
import GeoLoc from "../components/GeoLoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
let geolocBtn = "Get my Location";
const Home = (props) => {
  const [geoState, setGeoState] = useState(false)

  const changeGeoState = () => {

    console.log(geoState)
    setGeoState(true)
  }
  const handleGeo = () => {

    console.log("click")
    setGeoState(true)
    console.log(geoState)
    // return < GeoLoc />
  }

  // let geolocBtn = "Get my location";
  return (

    <>
      {/* <hr className="top-home-line" /> */}
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

              {/* <button className="geoloc-btn">
                <Link> <GeoLoc />{geolocBtn}</Link>

              </button> */}

              {/* <button onClick={handleGeo}> YOOOOOO {geoState ? <GeoLocBtn /> : void (0)}</button> */}

              {/* onClick={changeGeoState} geoState={geoState} */}


              {/* <GeoLoc /> */}

              <button className="geoloc-btn"
                onClick={handleGeo}
              >

                <div className="icon-cont">
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    className="icon-dot-circle"
                  />
                </div>
                Yoooo {geoState ? <GeoLoc /> : null}

              </button>


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






{/* <div className="icon-cont">
<FontAwesomeIcon
  icon={faDotCircle}
  className="icon-dot-circle"
/>
</div> */}