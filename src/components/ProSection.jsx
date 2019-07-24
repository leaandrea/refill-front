import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProSection() {
  return (
    <>
      <section className="pro">
        <h1 className="pro-title">
          Restaurants, stores, communities: Join Refill!
        </h1>
        <div className="pro-flex-container">
          <div className="pro-left-side">
            <FontAwesomeIcon icon={faPoo} className="icon-mouse-pointer" />
            <p>
              <br />
              Are you a business owner interested in health and environmental
              issues? You can help by registering your business on Refill.
            </p>
            <br />
            <Link to="/contribute">Click here to join Refill today!</Link>
          </div>
          <div className="pro-right-side">
            <FontAwesomeIcon icon={faPoo} className="icon-mouse-pointer" />
            <p>
              <br />
              By joining Refill, you are making a commitment to give away
              drinking water to anyone who might ask for it, free of charge. No
              glasses, no bottles, just water. Easy and convenient.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
