import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";
import "font-awesome/css/font-awesome.min.css";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    username: "",
    password: "",
    signupError: false
    // passwordConfirm: "1234"
  };

  checkPasswordMatch() {
    const { password, passwordConfirm } = this.state;
    var passed = false;
    if (password && passwordConfirm) passed = password === passwordConfirm;
    else passed = true;
    return passed;
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { username, password } = this.state;
    // simulate multipart/formdata ...
    const fd = new FormData();
    fd.append("username", username); // accessible @backend as req.body.name ...
    fd.append("password", password); // req.body./password
    apiHandler
      .post("/signup", { username, password }) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        this.props.history.push("/fountains");
        console.log(serverRes);
      })
      .catch(serverErr => {
        this.setState({ signupError: true });
        console.error(serverErr);
      });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, password } = this.state;
    return (
      <>
        <hr className="top-home-line" />
        <div className="auth-big-wrapper">
          <div className="auth-wrapper">
            <div className="auth-content">
              <div className="signup-content">
                <form
                  className="signup-form"
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                >
                  <h1 className="signup-title">Signup</h1>
                  <label htmlFor="username">Username</label>
                  <input
                    name="username"
                    id="username"
                    type="text"
                    defaultValue={username}
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    defaultValue={password}
                  />
                  {/* <label htmlFor="passwordConfirm">confirm password</label>
        <input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          defaultValue={passwordConfirm}
        /> */}
                  <hr />
                  <button className="btn">ok</button>
                  {this.state.signupError ? (
                    <div>
                      <p>
                        Sorry, we couldn't create your new account. Try using a
                        longer password.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
