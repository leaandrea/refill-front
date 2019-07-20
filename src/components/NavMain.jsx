import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Burger from "./Burger";

function NavMain() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink activeClassName="is-active" exact to="/home">
          <h1 className="nav-logo">Refill.</h1>
        </NavLink>

        <div className="burger">
          <FontAwesomeIcon icon="bars" className="btn-burger" />
        </div>
      </nav>
    </div>
  );
}

export default NavMain;
