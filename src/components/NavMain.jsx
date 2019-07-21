import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Burger from "./Burger";

function NavMain() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink activeClassName="is-active" exact to="/home">
          <div className="nav-logo">
            {/* <img src="../../../images/refill1-logo.png" alt="refill-logo" /> */}
            <h1>REFILL.</h1>
          </div>
        </NavLink>

        <div className="burger">
          <FontAwesomeIcon icon="bars" className="btn-burger" />
        </div>
      </nav>
    </div>
  );
}

export default NavMain;
