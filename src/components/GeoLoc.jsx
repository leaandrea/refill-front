import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import { Redirect } from "react-router-dom";


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