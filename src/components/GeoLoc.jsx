import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import { Link, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

class GeoLoc extends Component {

  state = {
    geoloc: false
  }

  // getGeoLoc = () => {
  //   this.setState({ geoloc: true })
  // }

  componentDidMount() {

  }

  render() {
    console.log(this.props.history)
    let geolocBtn = "Get my Location";
    return !this.props.isGeolocationAvailable ? (
      <p>Your browser does not support Geolocation</p>
    ) : !this.props.isGeolocationEnabled ? (
      null
    ) : this.props.coords ? (
      <>
        <Redirect
          to={{
            pathname: "/main-map",
            state: {
              initialLat: this.props.coords.latitude,
              initialLng: this.props.coords.longitude
            }
          }}
        />
      </>
    ) : (
            null
          );
  }
}

export { GeoLoc };

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  userDecisionTimeout: 5000
})(GeoLoc);