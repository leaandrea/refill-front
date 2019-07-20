import React from "react";
import NavMain from "../components/NavMain";

export default function AboutSection() {
  return (
    <>
      <section className="about">
        <div className="inner-border">
          <NavMain />
          <h3 className="about-title">
            With Refill, you can easily help the environement and save money !
          </h3>

          <div className="articles-container">
            <article className="art1">
              <div className="why-text-container">
                <h2>Why</h2>
                <p>
                  Plastic bottles pollutes and kill animals. We can reduce
                  plastic waste. There are many free spots in Paris where you
                  can refill your reusable water bottle.
                </p>
              </div>
            </article>

            <article className="art2">
              <div className="who-text-container">
                <h2>Who</h2>
                <p>
                  Everyone who's in Paris! You're a tourits in holidays, a
                  jogger, a family out for an afternoon.
                </p>
              </div>
            </article>

            <article className="art3">
              <div className="who-text-container">
                <h2>How</h2>
                <p>
                  Use our map to find a free spot near you. Don't forget to take
                  your water bottle!
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
