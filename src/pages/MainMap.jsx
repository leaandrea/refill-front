import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import axios from "axios";
import NavPages from "../components/NavPages";
import GoogleMap from "../components/GoogleMap";
import Filters from "../components/Filters";
// import Btn from "../components/Btn";
import Footer from "../components/Footer";
import APIHandler from "../ApiHandler/apiHandler";

const apiHandler = new APIHandler();

export default class MapContainer extends Component {
  state = {
    markers: [],
    displaySparklingWater: false,
    displayTypeFountain: false,
    displayTypeStore: false,
    reset: false,
    displayStillWater: false,
    buttonSparklingActive: false,
    buttonStillActive: false,
    buttonTypeStore: false,
    buttonTypeFountain: false
  };

  componentDidMount() {
    apiHandler
      .get(`/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(fontaine => {
          console.log("LAAAA", fontaine.type);
          return fontaine.en_service && fontaine.potable && fontaine.verified
            ? true
            : false;
        });
        this.setState({
          markers: fontainesEnService
        });
      })
      .catch(err => console.error(err));
  }

  getAllWater = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(
          fontaine =>
            fontaine.en_service && fontaine.potable && fontaine.verified
        );
        if (this.state.displaySparklingWater) {
          this.setState({
            markers: fontainesEnService.filter(oneSource => oneSource.gazeuse)
          });
        } else if (this.state.displayStillWater) {
          this.setState({
            markers: fontainesEnService
          });
        } else if (this.state.displayTypeStore) {
          this.setState({
            markers: fontainesEnService.filter(
              oneSource => oneSource.type === "commerce"
            )
          });
        } else if (this.state.displayTypeFountain) {
          this.setState({
            markers: fontainesEnService.filter(
              oneSource => oneSource.type === "fontaine"
            )
          });
        } else if (this.state.reset) {
          this.setState({
            markers: fontainesEnService
          });
        }
      })
      .catch(err => console.error(err));
  };

  getSparklingWater = () => {
    this.setState(
      {
        displaySparklingWater: !this.state.displaySparklingWater,
        displayStillWater: false,
        displayTypeStore: false,
        displayTypeFountain: false,
        buttonSparklingActive: true,
        buttonStillActive: false,
        buttonTypeStore: false,
        buttonTypeFountain: false
      },
      () => {
        this.getAllWater();
      }
    );
  };

  getStillWater = () => {
    this.setState(
      {
        displayStillWater: !this.state.displayStillWater,
        displaySparklingWater: false,
        displayTypeStore: false,
        displayTypeFountain: false,
        buttonStillActive: true,
        buttonSparklingActive: false,
        buttonTypeStore: false,
        buttonTypeFountain: false
      },
      () => this.getAllWater()
    );
  };

  getTypeStore = () => {
    this.setState(
      {
        displayTypeStore: !this.state.displayTypeStore,
        displayTypeFountain: false,
        displaySparklingWater: false,
        displayStillWater: false,
        buttonTypeStore: true,
        buttonTypeFountain: false,
        buttonStillActive: false,
        buttonSparklingActive: false
      },
      () => this.getAllWater()
    );
  };
  getTypeFountain = () => {
    this.setState(
      {
        displayTypeFountain: !this.state.displayTypeStore,
        displayTypeStore: false,
        displayStillWater: false,
        displaySparklingWater: false,
        buttonTypeFountain: true,
        buttonTypeStore: false,
        buttonStillActive: false,
        buttonSparklingActive: false
      },
      () => this.getAllWater()
    );
  };

  reset = () => {
    this.setState(
      {
        displayStillWater: !this.state.displayStillWater,
        displaySparklingWater: false,
        displayTypeStore: false,
        displayTypeFountain: false,
        buttonStillActive: false,
        buttonSparklingActive: false,
        buttonTypeStore: false,
        buttonTypeFountain: false
      },
      () => this.getAllWater()
    );
  };

  // getTypeStore = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/api/fontaines`)
  //     .then(fontaines => {
  //       let fontainesEnService = fontaines.data.filter(
  //         fontaine =>
  //           fontaine.en_service && fontaine.potable && fontaine.verified
  //       );
  //       if (!this.state.displayTypeStore) {
  //         let typeStore = fontainesEnService.filter(
  //           oneFontaine => oneFontaine.type === "store"
  //         );
  //         this.setState({
  //           markers: typeStore,
  //           displayTypeStore: true,
  //           buttonTypeStore: true
  //         });
  //       } else {
  //         this.setState({
  //           markers: fontainesEnService,
  //           displayTypeStore: false,
  //           buttonTypeStore: false
  //         });
  //       }
  //     })
  //     .catch(err => console.error(err));
  // };

  render() {
    return (
      //  !this.props.isGeolocationAvailable ? (
      //   <p>Your browser does not support Geolocation</p>
      // ) : !this.props.isGeolocationEnabled ? (
      //   <p>Geolocation is not enabled</p>
      // ) : this.props.coords ? (
      <>
        <hr className="top-home-line" />
        <NavPages />

        <h1 className="google-map-title">
          This fabulous map will help you find drinking water spots to refill
          your water bottle.
        </h1>

        <section className="map-and-filters">
          {this.props.location.state ? (
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
          ) : (
            <div className="google-map-container">
              {this.state.marker && (
                <GoogleMap
                  markers={this.state.markers}
                  initialCenter={{
                    lat: 48.858395,
                    lng: 2.347913
                  }}
                />
              )}
            </div>
          )}

          <Filters
            getSparklingWater={this.getSparklingWater}
            getTypeFountain={this.getTypeFountain}
            getTypeStore={this.getTypeStore}
            reset={this.reset}
            getStillWater={this.getStillWater}
            buttonSparklingActive={this.state.buttonSparklingActive}
            buttonStillActive={this.state.buttonStillActive}
            buttonTypeFountain={this.state.buttonTypeFountain}
            buttonTypeStore={this.state.buttonTypeStore}
          />
        </section>

        <section className="legend-section">
          <ul className="legend">
            <li className="blue">
              <p> Still water fountain</p>
            </li>
            <li className="green">
              <p> Sparkling water fountain</p>
            </li>
            <li className="corail">
              <p> Stores </p>
            </li>
          </ul>
        </section>
        <Footer />
      </>
      // )
      // : (
      //   <div>Getting the location data&hellip; </div>
    );
  }
}

// export { MapContainer };

// export geolocated({
//   positionOptions: {
//     enableHighAccuracy: false
//   },
//   apiKey: `AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo`,
//   userDecisionTimeout: 5000
// })(MapContainer);

// ;
//         if (!this.state.displaySparklingWater) {
//           let sparklingWater = fontainesEnService.filter(
//             oneFontaine => oneFontaine.gazeuse
//           );
//           this.setState({
//             markers: sparklingWater,
//             displaySparklingWater: true,
//             buttonSparklingActive: true,
//             buttonStillActive: false
//           });
//         } else {
//           this.setState({
//             markers: fontainesEnService,
//             displaySparklingWater: false,
//             buttonSparklingActive: false
//           });
//         }
