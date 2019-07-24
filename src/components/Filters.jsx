import React, { Component } from "react";
import GeoLoc from "../components/GeoLoc";

// import axios from "axios";

export default class Filters extends Component {
  state = {
    filterSparklingWater: {},
    filterFountains: {},
    filterStores: {},
    markers: []
  };

  render() {
    return (
      <div className="filters-container">
        <div className="filters-left">
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
              this.props.buttonTypeFountain ? "is-active" : ""
            } `}
            onClick={this.props.getTypeFountain}
          >
            Fountains
          </button>
          <button className="button-filter" onClick={this.props.reset}>
            See all water spots
          </button>
        </div>
        <div className="filters-right">
          <button
            className={`button-filter ${
              this.props.buttonSparklingActive ? "is-active" : ""
            } `}
            onClick={this.props.getSparklingWater}
          >
            Sparkling Water
          </button>
          <button
            className={`button-filter ${
              this.props.buttonTypeStore ? "is-active" : ""
            } `}
            onClick={this.props.getTypeStore}
          >
            Stores
          </button>

          <button className="button-filter">Get my location</button>
        </div>
      </div>
    );
  }
}
