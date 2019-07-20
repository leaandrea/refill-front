import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>
            <FontAwesomeIcon icon="" className="btn-close" />
          </button>
        </div>
      </div>
    );
  }
}
