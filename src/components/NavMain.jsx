import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

export default class NavMain extends Component {
  state = {
    menuStatus: false,
    logoColor: true
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
    return (
      <>
        <Menu
          history={this.props.history}
          menuStatus={this.state.menuStatus}
          closeMenu={this.handleClose}
        />

        <div
          className="navbar"
          style={{
            position: this.props.display === "absolute" ? "absolute" : "static"
          }}
        >
          <nav className="nav">
            <NavLink
              // style={{ color: this.state.color }}
              activeClassName="is-active"
              exact
              to="/home"
            >
              <div className="nav-logo">
                {/* <img src="../../../images/refill1-logo.png" alt="refill-logo" /> */}
                {this.props.logoState ? (
                  <img className="mainLogo" src="./images/LOGO1.png" alt="" />
                ) : (
                    <img className="mainLogo" src="./images/LOGO2.png" alt="" />
                  )}
              </div>
            </NavLink>

            <div className="burger" onClick={this.handleClick}>
              <FontAwesomeIcon
                icon="bars"
                className="btn-burger"
                style={{
                  color: this.props.color
                }}
              />
            </div>
          </nav>
        </div>
      </>
    );
  }
}
