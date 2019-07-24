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
        <h2>
          <a className="burger-link" href="/">
            Home
          </a>
        </h2>
                
        <h2>
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
        </h2>
                
        <h2>
          <a className="burger-link" href="/quality-info">
            Quality Info
          </a>
        </h2>
                
        <h2>
          <a className="burger-link" href="/contribute">
            Contribute
          </a>
        </h2>
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
                <p className="burger-link">Log out</p>
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
