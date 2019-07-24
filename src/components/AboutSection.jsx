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
                  to fill it for free. Refill will help you find public
                  fountains and businesses that offer free water. There are even
                  sparkling water fountains!
                </p>
                <p>
                  Want to know more about
                  <Link to="/quality-info"> water quality</Link>?
                </p>
              </div>
            </article>
            <article className="art1">
              <div className="why-text-container">
                <h2>Why</h2>
                <p>
                  Plastic bottles pollute and kill animals, and 80% of sea and
                  ocean waste is thrown on land. We can, in an easy way, reduce
                  plastic waste and help the planet while staying hydrated. It's
                  also cheaper for you, since bottled water is 400 times more
                  expensive than tap water.
                <Link to="/your-plastic-print"> And do you even know the impact of your consumption on the planet?</Link>
                </p>
              </div>
            </article>

            <article className="art2">
              <div className="who-text-container">
                <h2>Who</h2>
                <p>
                  Refill is for everyone who's in Paris, whether you're a local,
                  a tourist on holiday, a jogger, or a family out for the
                  afternoon.
                </p>
                <p>
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
