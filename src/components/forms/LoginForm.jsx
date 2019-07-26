import React, { Component } from "react";
import { AuthConsumer } from "../../auth/Guard";

export default class Login extends Component {
  state = {
    username: "toto",
    password: "1234"
  };

  handleSubmit = (evt, signin) => {
    // the handleSubmit method here receives 2 params
    // 1 - the classic event object
    // 2 - the signin function, passed by the AuthConsumer
    evt.preventDefault();
    signin(status => {
      console.log(status);
      // this callback is executed inside the Provider !!!
      this.props.history.push("/fountains");
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
      <>
        <AuthConsumer>
          {({ signin }) => (
            <>
              <hr className="top-home-line" />
              <div className="auth-big-wrapper">
                <div className="auth-wrapper">
                  <div className="auth-content">
                    <div className="signup-content">
                      <form
                        className="login-form"
                        onSubmit={evt => handleSubmit(evt, signin)}
                        onChange={handleChange}
                      >
                        <h1 className="login-title">login</h1>
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </AuthConsumer>
      </>
    );
  }
}
