import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";
import NavMain from "../NavMain";
import Footer from "../Footer";

const apiHandler = new APIHandler();

export default class ContactForm extends Component {
  state = {
    form: {},
    dbError: false,
    noDbError: false
  };

  handleChange = evt => {
    const form = { ...this.state.form };
    form[evt.target.name] = evt.target.value;
    this.setState({ form }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // axios
    //   .post(`${process.env.REACT_APP_BACKEND_URL}/contact`, this.state.form)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
    console.log(this.state.form);
    apiHandler
      .post(`/contact`, this.state.form)
      .then(serverRes => {
        this.setState({ dbError: false, noDbError: true });
        console.log(serverRes);
      })
      .catch(serverErr => {
        this.setState({ noDbError: false, dbError: true });
        console.log(serverErr);
      });
  };

  render() {
    return (
      <>
        <NavMain />
        <section className="formContainer">
          <div className="contact-frame">
            <div className="contact-form-borders">
              <h3 className="formIntroText">
                We're here to help and answer any question you might have!{" "}
                <br /> We look forward to hearing from you!
              </h3>

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
                <button className="send-button">Send</button>
                {this.state.noDbError ? (
                  <div>
                    <p>Thank you for contacting us!</p>
                  </div>
                ) : (
                  ""
                )}
                {this.state.dbError ? (
                  <div>
                    <p>
                      There was a problem sending your message. Please try
                      again.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
