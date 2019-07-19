import React, { Component } from "react";
import Btn from "../components/Btn";
import GoogleMap from "../components/GoogleMap";
import { geolocated } from "react-geolocated";

const mapStyles = {
  width: "50%",
  height: "50%"
};

class MapContainer extends Component {
  render() {
    console.log(mapStyles);
    console.log(this.props);
    let geolocBtn = "Get my Location";
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <GoogleMap
        initialCenter={{
          lat: this.props.coords.latitude,
          lng: this.props.coords.longitude
        }}
      />
    ) : (
      <div>Getting the location data&hellip; </div>
    );
    /* <div>
        <Btn>{geolocBtn}</Btn>
      </div> */
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
