import React, { Component } from "react";
import Geocode from "react-geocode";

import APIHandler from "../../ApiHandler/apiHandler";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
const apiHandler = new APIHandler();

export default class EditForm extends Component {
  state = {
    edit: {},
    noDbError: false,
    dbError: false
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
          this.props.fountain._id
        }`,
        this.state.edit
      )
      .then(serverRes => {
        console.log("ok", serverRes);
        this.props.getUpdateFountain();
        this.setState({ dbError: false, noDbError: true });
      })
      .catch(serverErr => {
        this.setState({ noDbError: false, dbError: true });
        console.log(`server error: ${serverErr}`);
      });
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
  testClick = () => {
    console.log("yoyo");
  };

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
    const { fountain, isDisplayEditForm } = this.props;
    // console.log("lol", this.props.fountain);
    return !isDisplayEditForm ? null : (
      <>
        <div
          className="modal-overlay"
          onClick={() => this.props.hideEditForm()}
        />
        <div className="form-wrapper">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => this.props.hideEditForm()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form
            id="edit_form"
            className="edit-form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <label>Is-it sparkling water ?</label>
            {fountain && (
              <select defaultValue={fountain.gazeuse} name="gazeuse">
                <option value="false">Plate</option>
                <option value="true">Sparkling</option>
              </select>
            )}

            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              defaultValue={fountain ? fountain.address : ""}
            />

            <label>In use ?</label>
            <select
              defaultValue={fountain ? fountain.en_service : ""}
              name="en_service"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Type of source ?</label>
            <select defaultValue={fountain ? fountain.type : ""} name="type">
              <option value="commerce">Commerce</option>
              <option value="fontaine">Fontaine</option>
            </select>
            <label>Verified</label>
            <select name="verified">
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
            <button>Update</button>
            {this.state.noDbError ? (
              <div>
                <p>Successfully modified !</p>
              </div>
            ) : (
              ""
            )}
            {this.state.dbError ? (
              <div>
                <p>
                  There was a problem editing your source. Please try again.
                </p>
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </>
    );
  }
}
