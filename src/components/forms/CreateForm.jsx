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
    name: "",
    noDbError: false,
    dbError: false
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
    const formData = new FormData();
    formData.append("gazeuse", this.state.gazeuse);
    formData.append("address", this.state.address);
    formData.append("verified", this.state.verified);
    formData.append("potable", this.state.potable);
    formData.append("lat", this.state.lat);
    formData.append("lng", this.state.lng);
    formData.append("en_service", this.state.en_service);
    formData.append("type", this.state.type);
    formData.append("name", this.state.name);
    apiHandler
      .post(`/api/fontaines`, formData)
      .then(serverRes => {
        console.log(serverRes);
        this.setState({ dbError: false, noDbError: true });
        this.props.history.push("/create-fountain");
      })
      .catch(serverErr => {
        this.setState({ noDbError: false, dbError: true });
        console.log(`server error: ${serverErr}`);
      });
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
            defaultValue={this.state.address}
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
                defaultValue={this.state.name}
              />
            </>
          ) : (
            <></>
          )}

          <button>Create</button>
        </form>

        {this.state.noDbError ? (
          <div>
            <p>Your source has been added to the database!</p>
          </div>
        ) : (
          ""
        )}
        {this.state.dbError ? (
          <div>
            <p>There was a problem adding your source. Please try again.</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
