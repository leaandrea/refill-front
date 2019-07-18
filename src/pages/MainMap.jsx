import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHwOJfv_9R95WIwNJF6jZ6QOrWztObtSo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 48.857803, lng: 2.380286 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 48.857803, lng: 2.380286 }} />
    )}
  </GoogleMap>
));

export default MyMapComponent;
