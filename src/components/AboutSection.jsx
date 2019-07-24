import React from "react";
// import NavMain from "../components/NavMain";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <section className="about">
        <div className="inner-border">
          {/* <NavMain /> */}
          <h3 className="about-title">
            With Refill, you can easily help the environement and save money!
          </h3>

          <div className="articles-container">
            <article className="art3">
              <div className="who-text-container">
                <h2>How</h2>
                <p>
                  Stop buying plastic bottles! Take your reusable water bottle
                  and use our map to find spots near you, where you'll be able
                  to fill it for free. There are even sparkling water fountains!
                  <br />
                </p>
                <p>
                  <br />
                  Want to know more about
                  <Link to="/quality-info"> water quality</Link>?
                </p>
              </div>
            </article>
            <article className="art1">
              <div className="why-text-container">
                <h2>Why</h2>
                <p>
                  Plastic bottles kill animals and create waste both on land and
                  in the ocean, and bottled water is 400 times more expensive
                  than tap water. Help the planet and save money while staying
                  hydrated!
                </p>
              </div>
            </article>

            <article className="art2">
              <div className="who-text-container">
                <h2>Who</h2>
                <p>
                  Refill is for everyone who is in Paris, whether you're a
                  local, a tourist on holiday, a jogger, or a family out for the
                  afternoon.
                  <br />
                </p>
                <p>
                  <br />
                  If we missed a spot you can tell us
                  <Link to="/contribute">here</Link>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
