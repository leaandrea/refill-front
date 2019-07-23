import React from "react";
import { Link } from "react-router-dom";

export default function Auth(props) {
  return (
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
  );
}
