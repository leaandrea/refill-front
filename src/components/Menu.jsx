import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavResponsive(props) {
  return (
    <div className={`menu ${props.menuStatus ? "is-active" : ""} `}>
      {/* <i class="fas fa-times"></i> */}
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
        <a className="burger-link" href="/main-map">
          Map
        </a>
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
    </div>
  );
}
