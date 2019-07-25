import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <hr className="top-home-line" />
      <div className="fof-wrapper">
        <h1 className="fof-title">You seem lost in the depths of the ocean.</h1>
        <h2 className="fof-subtitle">
          Go&nbsp;
          <Link className="link-home" to="/">
            Home
          </Link>
        </h2>

        <div className="gif-container">
          <div className="first-gif-container">
            <div className="number-container">4</div>
            <img
              src="https://media.giphy.com/media/VuISpVQ1glP68/source.gif"
              alt="gif1"
            />
          </div>
          <div className="middle-gif-container">
            <div className="number-container">0</div>
            <div className="mobile-number-container is-active">404</div>
            <img
              src="https://media.giphy.com/media/148sf4rYwG8ziU/source.gif"
              alt="gif2"
            />
          </div>
          <div className="third-gif-container">
            <div className="number-container">4</div>
            <img
              src="https://media.giphy.com/media/WWqkXLJBkHMxW/source.gif"
              alt="gif3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
