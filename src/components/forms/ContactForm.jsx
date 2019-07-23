import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";

const apiHandler = new APIHandler();

export default class ContactForm extends Component {
  state = {
    form: {}
  };

  handleChange = evt => {
    // console.log(this.state.form);
    const form = { ...this.state.form };
    form[evt.target.name] = evt.target.value;
    this.setState({ form }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    apiHandler
      .post(`${process.env.SITE_URL}/contact`, this.state.form)
      .then(serverRes => console.log(serverRes))
      .catch(serverErr => console.log(serverErr));
  };

  render() {
    return (
      <div className="contact-form-borders">
        <form
          className="contact-form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="firstname">First name</label>
          <input type="text" name="firstname" />
          <label htmlFor="lastname">Last name</label>
          <input type="text" name="lastname" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
