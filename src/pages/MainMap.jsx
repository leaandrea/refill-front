import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 48.857803,
          lng: 2.380286
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo"
})(MapContainer);
