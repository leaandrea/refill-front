import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Burger from "./Burger";
import NavResponsive from "./NavResponsive";

export default class NavMain extends Component {
  state = {
    menuStatus: false
    // menuOpen: false,
    // menuClose: true
  };
  handleClick = e => {
    this.setState({ menuStatus: true });
    // console.log(this.state);
  };

  handleClose = e => {
    this.setState({ menuStatus: false });
    // console.log(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <>
        <NavResponsive
          menuStatus={this.state.menuStatus}
          closeMenu={this.handleClose}
        />

        <div>
          <div className="navbar">
            <nav className="nav">
              <NavLink activeClassName="is-active" exact to="/home">
                <div className="nav-logo">
                  {/* <img src="../../../images/refill1-logo.png" alt="refill-logo" /> */}
                  <h1>REFILL.</h1>
                </div>
              </NavLink>

              <div className="burger" onClick={this.handleClick}>
                <FontAwesomeIcon icon="bars" className="btn-burger" />
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
