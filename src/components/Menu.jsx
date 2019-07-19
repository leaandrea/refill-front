import React, { Component } from "react";
import "../styles/scss/_menu.scss";

class Menu extends Component {
  render() {
    var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div
        id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
      >
                
        <h2>
          <a href="/">Home</a>
        </h2>
                
        <h2>
          <a href="/main-map">Map</a>
        </h2>
                
        <h2>
          <a href="/">Quality Info</a>
        </h2>
                
        <h2>
          <a href="/">Contribute</a>
        </h2>
              
      </div>
    );
  }
}
export default Menu;
