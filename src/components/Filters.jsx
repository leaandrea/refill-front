import React, { Component } from "react";
// import axios from "axios";

export default class Filters extends Component {
  state = {
    filterStillWater: {},
    filterSparklingWater: {},
    filterFountains: {},
    filterStores: {},
    markers: []
  };

  // handleClickStill = () => {
  //   apiHandler
  //     .get(`/api/fontaines`)
  //     .then(fontaines => {
  //       let stillWater = fontaines.data.filter(fontaine =>
  //         fontaine.potable ? true : false
  //       );
  //       console.log("C'EST PLAAAAT", stillWater);
  //       this.setState({
  //         filterStillWater: stillWater
  //       });
  //     })
  //     .catch(err => console.error(err));
  // };

  // handleClickSparkling = () => {
  //   // apiHandler
  //   //   .get(`/api/fontaines`)
  //   //   .then(fontaines => {
  //   //     let sparklingWater = fontaines.data.filter(fontaine =>
  //   //       fontaine.gazeuse ? true : false
  //   //     );
  //   //     //console.log("GAZZZZZ", sparklingWater);
  //   //     this.setState({
  //   //       filterStillSparkling: sparklingWater
  //   //     });
  //   this.props.getArr();
  //   // })
  //   // .catch(err => console.error(err));
  // };

  // handleClickTypeFountain = () => {
  //   apiHandler
  //     .get(`/api/fontaines`)
  //     .then(fontaines => {
  //       let typeFountain = fontaines.data.filter(fontaine =>
  //         fontaine.type === "fontaine" ? true : false
  //       );
  //       console.log("PUBLICCCCC FONTAIIINE", typeFountain);
  //       this.setState({
  //         filterStillSparkling: typeFountain
  //       });
  //     })
  //     .catch(err => console.error(err));
  // };
  // handleClickTypeStore = () => {
  //   apiHandler
  //     .get(`/api/fontaines`)
  //     .then(fontaines => {
  //       let typeStore = fontaines.data.filter(fontaine =>
  //         fontaine.type === "store" ? true : false
  //       );
  //       console.log("STORE SPOTS", typeStore);
  //       this.setState({
  //         filterStillSparkling: typeStore
  //       });
  //     })
  //     .catch(err => console.error(err));
  // };

  render() {
    return (
      <div className="filters-container">
        <div className="filters-left">
          <button
            className="button-filter is-active"
            onClick={this.props.getStillWater}
          >
            Still Water
          </button>
          <button
            className="button-filter is-active"
            onClick={this.props.getTypeFountain}
          >
            Fountains
          </button>
          <button
            className="button-filter is-active"
            onClick={this.props.getAllRefillSpots}
          >
            See all water spots
          </button>
        </div>
        <div className="filters-right">
          <button
            className="button-filter is-active"
            onClick={this.props.getSparklingWater}
          >
            Sparkling Water
          </button>
          <button
            className="button-filter is-active"
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
