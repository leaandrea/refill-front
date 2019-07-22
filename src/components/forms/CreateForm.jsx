import React, { Component } from "react";

import APIHandler from "../../ApiHandler/apiHandlerMap";

const apiHandler = new APIHandler();

export default class CreateForm extends Component {
  state = {
    gazeuse: false,
    address: "3 rue Jules César",
    verified: true,
    potable: 1,
    lat: 48.848919,
    lng: 2.368648,
    en_service: true,
    type: "fontaine",
    name: ""
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    apiHandler
      .post(`/api/fontaines`, this.state)
      .then(serverRes => {
        console.log(serverRes);
        this.props.history.push("/");
      })
      .catch(serverErr => console.log(serverErr));
  };

  render() {
    return (
      <div>
        <form
          id="contribute_form"
          className="contribute-form"
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

          <label htmlFor="latitude">Latitude</label>

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
          />

          <label>Is the fountain in service?</label>
          <select name="en_service">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>Type of source?</label>
          <select name="type">
            <option value="commerce">Commerce</option>
            <option value="fontaine">Fontaine</option>
          </select>
          <label htmlFor="name">
            If the source is the business, what's its name?
          </label>
          <input id="name" name="name" type="text" value={this.state.name} />

          <button>Create</button>
        </form>
      </div>
    );
  }
}
