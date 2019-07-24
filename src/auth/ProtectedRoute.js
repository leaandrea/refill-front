import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from ".//Guard";

// below : use of the rest parameter
/* 
@mdn : A function's last parameter can be prefixed with "..."
which will cause all remaining (user supplied) arguments to be placed within a "standard" javascript array. 
Only the last parameter can be a "rest parameter".
*/
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ loginStatus }) => (
      <Route
        render={props => {
          return loginStatus ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
        {...rest} // pass all passed (rest) argument(s) in a literal object to the Route
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
