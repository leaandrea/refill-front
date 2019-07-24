import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../auth/Guard";
import Fountains from "../pages/Fountains";
import NavPages from "../components/NavPages";

export default function Auth(props) {
  return (
    <>
      <NavPages />
      <AuthConsumer>
        {({ loginStatus }) =>
          loginStatus ? (
            <>
              <Fountains />
            </>
          ) : (
            <React.Fragment>
              <p>
                <Link className="link" to="/signup">
                  Don't have an account yet?
                </Link>
              </p>
              <p>
                <Link className="link" to="/login">
                  Already have an account?
                </Link>
              </p>
            </React.Fragment>
          )
        }
      </AuthConsumer>
    </>
  );
}
