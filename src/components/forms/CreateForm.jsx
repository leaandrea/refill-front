import React, { Component } from "react";

import APIHandler from "../../ApiHandler/apiHandler";
import Geocode from "react-geocode";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);

const apiHandler = new APIHandler();

export default class CreateForm extends Component {
  state = {
    gazeuse: false,
    address: "3 rue Jules César",
    verified: true,
    potable: 1,
    lat: null,
    lng: null,
    en_service: true,
    type: "commerce",
    name: ""
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  getLatLng(clbk) {
    Geocode.fromAddress(this.state.address).then(
      response => {
        this.setState({
          lat: response.results[0].geometry.location.lat,
          lng: response.results[0].geometry.location.lng
        });
        console.log(this.state);
        clbk();
      },
      error => {
        console.error(error);
      }
    );
  }

  addToDb = () => {
    console.log(this);
    apiHandler
      .post(`/api/fontaines`, this.state)
      .then(serverRes => {
        console.log(serverRes);
        this.props.history.push("/contribute");
      })
      .catch(serverErr => console.log(`server error: ${serverErr}`));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.getLatLng(this.addToDb);
  };

  render() {
    return (
      <div className="create-form-container">
        <form
          id="create_form"
          className="create-form"
          name="create-form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <label>Still or sparkling water ?</label>
          <select name="gazeuse">
            <option value="false">Still</option>
            <option value="true">Sparkling</option>
          </select>

          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="address"
            value={this.state.address}
          />

          {/* <label htmlFor="latitude">Latitude</label>

          <input
            id="latitude"
            name="lat"
            type="number"
            step="0.000001"
            value={this.state.lat}
          />
          <label htmlFor="longitude">Longitude</label>
          <input
            id="longitude"
            name="lng"
            type="number"
            step="0.000001"
            value={this.state.lng}
          /> */}

          <label>Is the fountain in service?</label>
          <select name="en_service">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Type of source?</label>
          <select name="type">
            <option value="commerce">Business</option>
            <option value="fontaine">Fontaine</option>
          </select>
          {this.state.type === "commerce" ? (
            <>
              <label htmlFor="name">What's the name of the business?</label>
              <input
                id="name"
                name="name"
                type="text"
                value={this.state.name}
              />
            </>
          ) : (
            <></>
          )}

          <button>Create</button>
        </form>
      </div>
    );
  }
}
