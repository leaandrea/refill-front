import React, { Component } from "react";
import axios from "axios";
import Btn from "../Btn";

export default class ContributeForm extends Component {
  state = {
    contributeForm: {}
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // axios
  //     .post(`${process.env.SITE_URL}/contribute`, contributeForm)
  //     .then(serverRes => {
  //       console.log("serverRes", serverRes);
  //       console.log("state", this.state);
  //     })
  //     .catch(serverErr => console.log(serverErr));
  // };

  render() {
    let sendBtn = "Send";
    return (
      <form
        id="contribute_form"
        className="contribute-form"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      >
        <label>I am a :</label>

        <select name="whoareyou">
          <option value="particulier">Particulier</option>
          <option value="professionnel">Professionnel</option>
        </select>
        <label>Type of water</label>
        <select name="water-type">
          <option value="plate">Plate</option>
          <option value="sparkling">Sparkling</option>
        </select>

        <input id="address" name="address" type="address" />
        <label htmlFor="address">Address</label>

        <Btn>{sendBtn}</Btn>
      </form>
    );
  }
}
