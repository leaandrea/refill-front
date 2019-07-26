import React from "react";
import { Link } from "react-router-dom";
import { AuthConsumer } from "../auth/Guard";
import Fountains from "../pages/Fountains";

export default function Auth(props) {
  return (
    <>
      <AuthConsumer>
        {({ loginStatus, username }) =>
          loginStatus ? (
            <>
              <Fountains state={{ username: username }} />
            </>
          ) : (
            <>
              <hr className="top-home-line" />
              <div className="auth-big-wrapper">
                <div className="auth-wrapper">
                  <div className="auth-content">
                    <div className="auth-text-content">
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </AuthConsumer>
    </>
  );
}
