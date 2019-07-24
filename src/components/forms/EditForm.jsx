import React, { Component } from "react";
import Geocode from "react-geocode";

import APIHandler from "../../ApiHandler/apiHandler";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
const apiHandler = new APIHandler();

export default class EditForm extends Component {
  state = {
    edit: {}
  };

  handleChange = evt => {
    const edit = { ...this.state.edit };
    edit[evt.target.name] = evt.target.value;
    this.setState({ edit }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.getLatLng(this.addToDb);
    apiHandler
      .update(
        `${process.env.REACT_APP_BACKEND_URL}/api/fontaines/${
          this.props.match.params.id
        }`,
        this.state.edit
      )
      .then(serverRes => console.log(serverRes))
      .catch(serverErr => console.log(serverErr));
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
        this.props.history.push("/check-contributions");
      })
      .catch(serverErr => console.log(`server error: ${serverErr}`));
  };

  render() {
    console.log(this.props);

    return (
      <>
        <div>
          <form
            id="contribute_form"
            className="contribute-form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <label>Is-it sparkling water ?</label>
            <select name="gazeuse">
              <option value="false">Plate</option>
              <option value="true">Sparkling</option>
            </select>

            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              defaultValue={this.props.location.state.address}
            />
            {/* 
            <label htmlFor="latitude">Latitude</label>

            <input
              id="latitude"
              name="lat"
              type="number"
              defaultValue={this.props.location.state.lat}
            />

            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              name="lng"
              type="number"
              defaultValue={this.props.location.state.lng}
            /> */}

            <label>En service ?</label>
            <select name="en_service">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Type of source ?</label>
            <select name="type">
              <option value="commerce">Commerce</option>
              <option value="fontaine">Fontaine</option>
            </select>
            <label>Verified</label>
            <select name="verified">
              <option value={this.props.location.state.verified === false}>
                False
              </option>
              <option value="true">True</option>
            </select>
            <button>edit</button>
          </form>
        </div>
        <a href="/check-contributions">Go to check board</a>
        <a href="/fountains">Go to admin board</a>
      </>
    );
  }
}
