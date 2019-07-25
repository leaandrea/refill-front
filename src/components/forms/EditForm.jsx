import React, { Component } from "react";
import Geocode from "react-geocode";

import APIHandler from "../../ApiHandler/apiHandler";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
const apiHandler = new APIHandler();

export default class EditForm extends Component {
  state = {
    edit: {},
    fountainIndex: null
  };

  // UNSAFE_componentWillReceiveProps(toto) {
  //   this.setState({ fountainIndex: toto.selectedFountain });
  // }

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
        this.props.getUpdateFountain();
      })
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
    const { fountain, isDisplayForm } = this.props;
    console.log("grr", isDisplayForm);
    // console.log("lol", this.props.fountain);
    return !isDisplayForm ? null : (
      <>
        <div className="modal-overlay" onClick={() => this.props.hideForm()} />
        <div className="form-wrapper">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => this.props.hideForm()}
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

            <label>En service ?</label>
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
            <button>edit</button>
          </form>
        </div>

        <a href="/check-contributions">Go to check board</a>
        <a href="/fountains">Go to admin board</a>
      </>
    );
  }
}
