import React, { Component } from "react";
import APIHandler from "../../ApiHandler/apiHandler";
import "font-awesome/css/font-awesome.min.css";

const apiHandler = new APIHandler();

export default class Signup extends Component {
  state = {
    isPasswordOk: false,
    username: "toto",
    password: "1234",
    passwordConfirm: "1234"
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
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { username, password, passwordConfirm } = this.state;
    // simulate multipart/formdata ...
    const fd = new FormData();
    fd.append("username", username); // accessible @backend as req.body.name ...
    fd.append("password", password); // req.body./password

    apiHandler
      .post("/signup", fd) // let's post the built formData object as a regular payload
      .then(serverRes => {
        // everything is fine, redirect to dashboard
        console.log(this.props);
        this.props.redirect("/fountains");
        console.log(serverRes);
      })
      .catch(serverErr => console.error(serverErr));
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, password, passwordConfirm } = this.state;
    return (
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <h1 className="title">Signup</h1>
        <label htmlFor="username">username</label>
        <input
          name="username"
          id="username"
          type="text"
          defaultValue={username}
        />

        <label htmlFor="password">password</label>
        <input
          name="password"
          id="password"
          type="password"
          defaultValue={password}
        />
        <label htmlFor="passwordConfirm">confirm password</label>
        <input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          defaultValue={passwordConfirm}
        />
        <hr />
        <button className="btn">ok</button>
      </form>
    );
  }
}
