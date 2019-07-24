import React, { Component } from "react";
import Geocode from "react-geocode";
import ReactDOM from "react-dom";

import APIHandler from "../../ApiHandler/apiHandler";

Geocode.setApiKey(`${process.env.REACT_APP_API_KEY}`);
const apiHandler = new APIHandler();

export default class TermsOfUseModal extends Component {
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
    return (TermsOfUseModal = ({ isShowing, hide }) =>
      isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div className="modal-overlay" />
              <div
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={hide}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-content">
                    <h1>Terms of use</h1>
                    <p>
                      <div>
                        <form
                          id="contribute_form"
                          className="contribute-form"
                          onSubmit={this.handleSubmit}
                          onChange={this.handleChange}
                        >
                          <label>Is-it sparkling water ?</label>
                          <select
                            defaultValue={this.props.location.state.gazeuse}
                            name="gazeuse"
                          >
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
                          <label>En service ?</label>
                          <select
                            defaultValue={this.props.location.state.en_service}
                            name="en_service"
                          >
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                          <label>Type of source ?</label>
                          <select
                            defaultValue={this.props.location.state.type}
                            name="type"
                          >
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
                    </p>
                  </div>
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null);
  }
}
