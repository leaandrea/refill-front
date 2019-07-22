import React, { Component } from "react";

export default class Filters extends Component {
  state = {
    filter: {}
  };
  // handleClick = evt => {
  //   this.setState({ filterStillWater: filter });
  // };
  render() {
    return (
      <div className="filters-container">
        <div className="filters-left">
          <button onclick={this.handleClick}>Still Water</button>
          <button>Fountains</button>
          <button>See all water spots</button>
        </div>
        <div className="filters-right">
          <button>Sparkinkg Water</button>
          <button>Stores</button>
          <button>Get my location</button>
        </div>
      </div>
    );
  }
}
