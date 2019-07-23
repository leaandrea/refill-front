import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";

const apiHandler = new APIHandler();

export default class ContributeForm extends Component {
  state = {
    type: "",
    gazeuse: false,
    address: "3 rue Jules César",
    name: ""
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="contribute-section">
        <div className="contribute-text">
          <h3>Help other Refill users find free water close to them!</h3>
          <p>
            You can use the form below to submit a new source of water that we
            might have missed.
          </p>
          <p>Feel free to submit a public fountain!</p>
          <p>
            If you own a restaurant or a business and you're willing to give
            away free water to Refill users, we will gladly add your company to
            our database.
          </p>
        </div>
        <form
          id="contribute_form"
          className="contribute-form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <label>I am</label>

          <select name="type">
            <option value="fontaine">An individual</option>
            <option value="commerce">A business owner</option>
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
          <label>Type of water</label>
          <select name="water-type">
            <option value="false">Still</option>
            <option value="true">Sparkling</option>
          </select>

          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="address" />

          <button>Send</button>
        </form>
      </div>
    );
  }
}
