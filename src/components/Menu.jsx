import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuthConsumer } from "./../auth/Guard";

export default function NavResponsive(props) {
  // const handleclick = () => {
  //   console.log("cli");
  // };
  // console.log(AuthConsumer);
  return (
    <div className={`burger-container ${props.menuStatus ? "is-active" : ""}`}>
      <div className={`overlay ${props.menuStatus ? "is-active" : ""}`} />
      <div className={`menu ${props.menuStatus ? "is-active" : ""} `}>
        <div className="times-container">
          <FontAwesomeIcon
            className="fa-times"
            color="white"
            icon="times"
            onClick={props.closeMenu}
          />
        </div>

        <div className="burgerListContainer">
          <ul className="burgerList">
            <li>
              <a className="burger-link" href="/">
                Home
              </a>
            </li>
            <li>
              <Link
                className="burger-link"
                to={{
                  pathname: "/main-map",
                  state: {
                    initialLat: 48.858395,
                    initialLng: 2.347913
                  }
                }}
              >
                Map
              </Link>
            </li>

            <li>
              <a className="burger-link" href="your-plastic-print">
                Footprint Calculator
              </a>
            </li>

            <li>
              <a className="burger-link" href="/quality-info">
                Water Quality
              </a>
            </li>

            <li>
              <a className="burger-link" href="/contribute">
                Contribute
              </a>
            </li>
          </ul>
        </div>

        <AuthConsumer>
          {({ signout, loginStatus }) =>
            loginStatus ? (
              <h2
                onClick={() =>
                  signout(res => {
                    console.log(res);
                    props.history.push("/login");
                  })
                }
              >
                <p className="burger-link-logout">
                  Log out{" "}
                  <FontAwesomeIcon className="fa-power-off" icon="power-off" />
                </p>
              </h2>
            ) : (
              ""
            )
          }
        </AuthConsumer>
      </div>
    </div>
  );
}
