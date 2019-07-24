import React from "react";
import axios from "axios";

// let's create a api handler for auth purposes
// notice withCredentials option
// this will allow axios to send the auth cookie, provided by express, with each request
const apiAuthHandler = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

/*
From  React doc : https://reactjs.org/docs/context.html#when-to-use-context
---------------------------------
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
---------------------------------
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:
*/

const AuthContext = React.createContext();
// Basics Context concepts
// createContext() — return 2 components : Provider and Consumer.
// Provider — Component exposing data changes to subscribed Consumers
// Consumer — Component subscribed to a Provider

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: {}, // by default, user is not signed-in...
      // i started with a false value but then ...
      // i've put an object literal here just to avoid a weird refresh bug ... still investigating
      user: null
    };
  }

  componentDidMount() {
    this.isLoggedIn(); // check if user is signed-in when AuthConsumer is mounted
  }

  // check mdn @ : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/get
  get user() {
    return this.state.user;
  }

  updateState(data) {
    const { loginStatus, user } = data;
    this.setState({ loginStatus: loginStatus, user: user });
  }

  isLoggedIn = () => {
    apiAuthHandler
      .get("/loggedin", null)
      .then(serverRes => {
        // server accepted the request (this user is stored into session)
        // let's update the state loginStatus + user key/value pairs
        this.updateState(serverRes.data);
      })
      .catch(serverErr => {
        // console.error(serverErr);
        this.setState({ loginStatus: false });
      });
  };

  signin = (clbk, data) => {
    apiAuthHandler
      .post("/login", data)
      .then(async serverRes => {
        // once loggedin, the state is updated =>
        // this will prevent the ProtectedRoute component redirect to /signin
        // check src/auth/ProtectedRoute.js
        await this.updateState(serverRes.data); // wait state update
        // then ... exec the callback (leading to a redirect)
        clbk(serverRes.data.loginStatus);
      })
      .catch(serverErr => this.setState({ isLoggedIn: false }));
  };

  signout = clbk => {
    // send a request to the server : session will be destroyed there
    apiAuthHandler.post("/logout").then(serverRes => {
      this.setState({ loginStatus: false }, () => clbk(this.isLoggedIn));
      console.log(this.state.loginStatus);
    });
  };

  render() {
    // return a context Provider ...
    return (
      <AuthContext.Provider
        // below, the values exposed by the provider (to be consumed later ;)
        value={{
          // exposed properties
          user: this.user,
          loginStatus: this.state.loginStatus,
          // exposed methods
          isLoggedIn: this.isLoggedIn,
          signin: this.signin,
          signout: this.signout
        }}
      >
        {/* here, the provider children tags will be inserted */}
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
