import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Btn from ".././Components/Btn";

const mapStyles = {
  width: "50%",
  height: "50%"
};

export class MapContainer extends Component {
  render() {
    console.log(mapStyles);
    let geolocBtn = "Get my Location";
    return (
      <>
        <div>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
              lat: 48.857803,
              lng: 2.380286
            }}
          />
        </div>
        <div>
          <Btn>{geolocBtn}</Btn>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo"
})(MapContainer);
