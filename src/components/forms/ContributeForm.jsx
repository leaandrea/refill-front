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
      <>
        <div>
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

          <select name="whoareyou">
            <option value="particulier">An individual</option>
            <option value="professionnel">A business owner</option>
          </select>
          <label>Type of water</label>
          <select name="water-type">
            <option value="plate">Still</option>
            <option value="sparkling">Sparkling</option>
          </select>

          <input id="address" name="address" type="address" />
          <label htmlFor="address">Address</label>

          <Btn>{sendBtn}</Btn>
        </form>
      </>
    );
  }
}
