import React, { Component } from "react";

export default class ContributeForm extends Component {
  render() {
    return (
      <>
        <form>
          <label htmlFor="name">address</label>
          <input type="text" name="address" />
        </form>
      </>
    );
  }
}
