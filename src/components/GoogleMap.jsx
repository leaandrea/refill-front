import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

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
        initialCenter={{
          lat: this.props.initialCenter.lat,
          lng: this.props.initialCenter.lng
        }}
        gestureHandling="cooperative"
        styles={[
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f4f5fb"
              }
            ]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f4f5fb"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#fbfdfd"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry.stroke",
            stylers: [
              {
                weight: 0.5
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#e4fded"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#040022"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f3fdea"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#f3fdea"
              }
            ]
          }
        ]}
      >
        {this.props.markers.map((marker, i) =>
          marker.type === "fontaine" ? (
            marker.gazeuse ? (
              <Marker
                key={i}
                onClick={this.onMarkerClick}
                address={marker.address ? marker.address : "Fontaine"}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: "/images/gazeuse4.png",
                  scaledSize: new this.props.google.maps.Size(11.8, 11.8)
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
          ) : (
            <Marker
              key={i}
              onClick={this.onMarkerClick}
              address={marker.address ? marker.address : "Fontaine"}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/images/commerces.png",
                scaledSize: new this.props.google.maps.Size(11.5, 11.5)
              }}
              name={marker.name}
              gazeuse={marker.gazeuse}
              type={marker.type}
            />
          )
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>
              {this.state.selectedPlace.type === "commerce"
                ? this.state.selectedPlace.name
                : this.state.selectedPlace.address}
            </h4>
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
  apiKey: process.env.REACT_APP_API_KEY
})(GoogleMap);
