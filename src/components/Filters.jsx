import React, { Component } from "react";
import GeoLoc from "../components/GeoLoc";

// import axios from "axios";

export default class Filters extends Component {
  state = {
    filterSparklingWater: {},
    filterFountains: {},
    filterStores: {},
    markers: [],
    geoloc: false
  };

  handleGeoLoc = evt => {
    console.log("click");
    this.setState({ geoloc: true }, () => {
      window.location = "/main-map";

      // this.props.history.replace("/main-map")
      console.log(this.state.geoloc);
    });
  };

  render() {
    return (
      <div className="filters-container">
        <h2 className="filters-ctn filters-1">Filter sources:</h2>
        <div className="filters-ctn filters-2">
          <button
            className={`button-filter ${
              this.props.buttonStillActive ? "is-active" : ""
            } `}
            onClick={this.props.getStillWater}
          >
            Still Water
          </button>
          <button
            className={`button-filter ${
              this.props.buttonSparklingActive ? "is-active" : ""
            } `}
            onClick={this.props.getSparklingWater}
          >
            Sparkling Water
          </button>
        </div>
        <div className="filters-ctn filters-3">
          <button
            className={`button-filter ${
              this.props.buttonTypeFountain ? "is-active" : ""
            } `}
            onClick={this.props.getTypeFountain}
          >
            Fountains
          </button>
          <button
            className={`button-filter ${
              this.props.buttonTypeStore ? "is-active" : ""
            } `}
            onClick={this.props.getTypeStore}
          >
            Stores
          </button>
        </div>
        <div className="filters-ctn filters-4">
          <button className="button-filter" onClick={this.props.reset}>
            Reset all filters
          </button>
        </div>
        <div className="filters-ctn filters-5">
          <button onClick={this.handleGeoLoc} className="button-filter">
            Around me {this.state.geoloc ? <GeoLoc /> : null}{" "}
          </button>
        </div>
      </div>
    );
  }
}
