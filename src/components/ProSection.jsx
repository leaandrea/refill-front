import React from "react";
import { Link } from "react-router-dom";

export default function ProSection() {
  return (
    <>
      <section className="pro">
        <h1 className="pro-title">
          Restaurants, stores, communities: join Refill!
        </h1>


        <div className="pro-flex-container">


          <div className="pro-left-side">
            <img src="./images/ecologo2.png" alt="ecologo" className="icon-mouse-pointer1" />
            <p>
              <br />
              Are you a business owner interested in health and environmental
              issues? You can help by registering your business on Refill!
              <Link to="/contribute" className="clickHerePro"> <br /> Click here to join Refill today!</Link>
            </p>
            <br />

          </div>

          <div className="pro-right-side">
            <img src="./images/ecologo1.png" alt="ecologo" className="icon-mouse-pointer" />
            <p className="textProSection">
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
