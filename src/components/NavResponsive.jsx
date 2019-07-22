import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavResponsive(props) {
  console.log(props);
  return (
    <div className={`menu ${props.menuStatus ? "is-active" : ""} `}>
      <FontAwesomeIcon icon="trash" onClick={props.closeMenu} />
    </div>
  );
}
