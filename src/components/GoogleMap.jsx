import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";

const mapStyles = {
  width: "75%",
  height: "75%"
};

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    markers: []
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
        this.setState({ markers: fontainesEnService });
      })
      .catch(err => console.error(err));
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: this.props.initialCenter.lat,
          lng: this.props.initialCenter.lng
        }}
      >
        {this.state.markers.map((marker, i) =>
          marker.gazeuse ? (
            <Marker
              key={i}
              onClick={this.onMarkerClick}
              address={marker.address ? marker.address : "Fontaine"}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/images/gazeuse_icon.png",
                scaledSize: new this.props.google.maps.Size(14, 14)
              }}
              gazeuse={marker.gazeuse}
            />
          ) : (
            <Marker
              key={i}
              onClick={this.onMarkerClick}
              address={marker.address ? marker.address : "Fontaine"}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/images/bluedot_icon.png",
                scaledSize: new this.props.google.maps.Size(10, 10)
              }}
              gazeuse={marker.gazeuse}
            />
          )
        )}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.address}</h4>
            <p>
              {this.state.selectedPlace.gazeuse
                ? "Fontaine d'eau gazeuse"
                : "Fontaine d'eau plate"}
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo"
})(GoogleMap);
