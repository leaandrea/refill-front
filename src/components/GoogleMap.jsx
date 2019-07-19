import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";



const mapStyles = {
  width: "50%",
  height: "50%"
};

export class GoogleMap extends Component {


  // static getDerivedStateFromProps(newProps, newState) {
  //   console.log("new props", newProps);
  //   console.log("newState", newState);
  //   return null;
  // }

  render() {

    // console.log("here", this.props)



    return (
      <>
        <div>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
              // lat: this.props.initialCenter.lat,
              // lng: this.props.initialCenter.lng
              lat: this.props.initialCenter.lat,
              lng: this.props.initialCenter.lng
            }}
          />
        </div>

      </>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: `AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo`
})(GoogleMap);