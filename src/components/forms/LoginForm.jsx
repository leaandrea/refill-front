import React, { Component } from "react";
import { AuthConsumer } from "../../auth/Guard";

export default class Login extends Component {
  state = {
    username: "toto",
    password: "1234"
  };

  handleSubmit = (evt, login) => {
    // the handleSubmit method here receives 2 params
    // 1 - the classic event object
    // 2 - the login function, passed by the AuthConsumer
    evt.preventDefault();
    login(status => {
      // this callback is executed inside the Provider !!!
      this.props.redirect("/fountains");
    }, this.state);
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { username, password } = this.state;
    return (
      <AuthConsumer>
        {({ login }) => (
          <form
            className="form"
            onSubmit={evt => handleSubmit(evt, login)}
            onChange={handleChange}
          >
            <h1 className="title">login</h1>
            <label htmlFor="username">username</label>
            <input
              id="username"
              name="username"
              type="username"
              defaultValue={username}
            />
            <label htmlFor="password">password</label>
            <input
              name="password"
              id="password"
              type="password"
              defaultValue={password}
            />
            <button className="btn">ok</button>
          </form>
        )}
      </AuthConsumer>
    );
  }
}
