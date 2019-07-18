import React from "react";

const Btn = ({ handleClick, color, children }) => {
  return (
    <button
      className="geoloc-btn"
      style={{ background: color }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Btn;
