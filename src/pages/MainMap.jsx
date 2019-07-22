import React, { Component } from "react";
import { geolocated } from "react-geolocated";

import NavPages from "../components/NavPages";
import GoogleMap from "../components/GoogleMap";
import Filters from "../components/Filters";
// import Btn from "../components/Btn";
import Footer from "../components/Footer";

class MapContainer extends Component {
  render() {
    console.log(this.props);
    // let geolocBtn = "Get my Location";
    return !this.props.isGeolocationAvailable ? (
      <p>Your browser does not support Geolocation</p>
    ) : !this.props.isGeolocationEnabled ? (
      <p>Geolocation is not enabled</p>
    ) : this.props.coords ? (
      <>
        <hr className="top-home-line" />
        <NavPages />

        <h1 className="google-map-title">
          This fabulous map will help you find drinking water spots to refill
          your water bottle.
        </h1>

        <section className="map-and-filters">
          <div className="google-map-container">
            <GoogleMap
              initialCenter={{
                lat: this.props.location.state.initialLat,
                lng: this.props.location.state.initialLng
              }}
            />
          </div>

          <Filters />
        </section>

        <section className="legend-section">
          <ul className="legend">
            <li className="blue">
              <p> Still water fountain</p>
            </li>
            <li className="green">
              <p>Sparkling water fountain</p>
            </li>
            <li className="corail">
              <p> Stores </p>
            </li>
          </ul>
        </section>
        <Footer />
      </>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export { MapContainer };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  apiKey: `AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo`,
  userDecisionTimeout: 5000
})(MapContainer);
