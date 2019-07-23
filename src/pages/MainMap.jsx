import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";
import NavPages from "../components/NavPages";
import GoogleMap from "../components/GoogleMap";
import Filters from "../components/Filters";
// import Btn from "../components/Btn";
import Footer from "../components/Footer";

class MapContainer extends Component {
  state = {
    markers: [],
    displaySparklingWater: false,
    displayTypeFountain: false,
    displayTypeStore: false,
    displayAllRefillSpots: false,
    displayStillWater: false
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(fontaine =>
          fontaine.en_service && fontaine.potable && fontaine.verified
            ? true
            : false
        );
        this.setState({
          markers: fontainesEnService
          // initialLat: this.props.initialLat,
          // initialLng: this.props.initialLng
        });
      })
      .catch(err => console.error(err));
  }

  getSparklingWater = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (!this.state.displaySparklingWater) {
          let sparklingWater = fontainesEnService.filter(
            oneFontaine => oneFontaine.gazeuse
          );
          this.setState({
            markers: sparklingWater,
            displaySparklingWater: true
          });
        } else {
          this.setState({
            markers: fontainesEnService,
            displaySparklingWater: false
          });
        }
      })
      .catch(err => console.error(err));
  };

  getStillWater = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (!this.state.displayStillWater) {
          let stillWater = fontainesEnService.filter(
            oneFontaine => oneFontaine.potable
          );
          this.setState({
            markers: stillWater,
            displayStillWater: true
          });
        } else {
          this.setState({
            markers: fontainesEnService,
            displayStillWater: false
          });
        }
      })
      .catch(err => console.error(err));
  };

  getTypeFountain = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (!this.state.displayTypeFountain) {
          let typeFountain = fontainesEnService.filter(
            oneFontaine => oneFontaine.type === "fontaine"
          );
          this.setState({
            markers: typeFountain,
            displayTypeFountain: true
          });
        } else {
          this.setState({
            markers: fontainesEnService,
            displayTypeFountain: false
          });
        }
      })
      .catch(err => console.error(err));
  };

  getTypeStore = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (!this.state.displayTypeStore) {
          let typeStore = fontainesEnService.filter(
            oneFontaine => oneFontaine.type === "store"
          );
          this.setState({
            markers: typeStore,
            displayTypeStore: true
          });
        } else {
          this.setState({
            markers: fontainesEnService,
            displayTypeStore: false
          });
        }
      })
      .catch(err => console.error(err));
  };

  getAllRefillSpots = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (!this.state.displayAllRefillSpots) {
          this.setState({
            markers: fontainesEnService,
            displayAllRefillSpots: true
          });
        } else {
          this.setState({
            markers: [],
            displayAllRefillSpots: false
          });
        }
      })
      .catch(err => console.error(err));
  };

  render() {
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
            {this.props.location.state && (
              <GoogleMap
                markers={this.state.markers}
                initialCenter={{
                  lat: this.props.location.state.initialLat,
                  lng: this.props.location.state.initialLng
                }}
              />
            )}
          </div>

          <Filters
            getSparklingWater={this.getSparklingWater}
            getTypeFountain={this.getTypeFountain}
            getTypeStore={this.getTypeStore}
            getAllRefillSpots={this.getAllRefillSpots}
            getStillWater={this.getStillWater}
          />
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
