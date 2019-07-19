import React from "react";
import { NavLink } from "react-router-dom";

function NavMain() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink activeClassName="is-active" exact to="/home">
          <h1 className="nav-logo">LOGO</h1>
        </NavLink>

        <div className="burger">
          <button className="btn-nav">BURGER</button>
        </div>
      </nav>
    </div>
  );
}

export default NavMain;
