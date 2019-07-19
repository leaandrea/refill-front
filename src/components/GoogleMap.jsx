

import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";



//MONTRUC
// export class GoogleMap extends Component {
//   render() {

//     // console.log("here", this.props)



//     return (
//       <>
//         <div>
//           <Map
//             google={this.props.google}
//             zoom={15}
//             style={mapStyles}
//             initialCenter={{
//               // lat: this.props.initialCenter.lat,
//               // lng: this.props.initialCenter.lng
//               lat: this.props.initialCenter.lat,
//               lng: this.props.initialCenter.lng
//             }}
//           />
//         </div>

//       </>
//     );
//   }
// }




//SONTRUC

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
      .get("http://localhost:9999/api/fontaines")
      .then(fontaines => {
        let fontainesEnService = fontaines.data.filter(fontaine =>
          fontaine.en_service && fontaine.potable ? true : false
        );
        console.log(fontainesEnService);
        this.setState({ markers: fontainesEnService });
      })
      .catch(err => console.error(err));
  }

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
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
        {this.state.markers.map((marker, i) => (
          <Marker
            key={i}
            onClick={this.onMarkerClick}
            address={marker.address ? marker.address : "Fontaine"}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/images/bluedot_icon.png",
              scaledSize: new this.props.google.maps.Size(10, 10)
            }}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.address}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo"
})(GoogleMap);